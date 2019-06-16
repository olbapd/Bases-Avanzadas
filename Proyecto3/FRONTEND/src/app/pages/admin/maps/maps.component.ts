
import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { AdminService } from '../../../services/admin.service';
import { company } from '../../../interfaces/company';
@Component({
  selector: 'maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})

export class MapComponent {
  title: string = 'AGM project';
  editField: string;
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  tipo: string[];
  phone: string;
  website: string;
  rating: number;
  schedule: string;
  photo: any;
  isPopupOpened = false;
  page = 1;
  pageSize = 4;
  companiess: company[] = [];
  collectionSize: number = 0;
  private geoCoder;

  @ViewChild('search')
  public searchElementRef: ElementRef;


  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private adminService: AdminService) { }


  ngOnInit() {
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;

      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        componentRestrictions: { country: 'CR' },
        types: []
      });
      autocomplete.addListener("place_changed", () => {

        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.tipo = place.types;
          this.address = place.formatted_address;
          this.phone = place.international_phone_number;
          this.website = place.website;
          this.rating = place.rating;
          this.schedule = (place.opening_hours.weekday_text).toString();
          this.photo = place.photos;
          //console.log("PHOTOS:"+" "+JSON.stringify(place.photos));
          //let img_load = document.getElementById('imgUP');
          //img_load.setAttribute('src', place.photos);
          this.zoom = 17;
        });
      });
    });
    this.Company();
  }
  get companies(): company[] { //BIND TABLE
    return this.companiess
      .map((companiess, i) => ({ id: i + 1, ...companiess }))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
  
  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }
  Company() {
    this.adminService.getCompany().subscribe((res) => {
      const myObjStr = JSON.stringify(res)
      const json = JSON.parse(myObjStr);
      var count = Object.keys(json.data).length;
      this.collectionSize = count;
      for (var _i = 0; _i < count; _i++) {
        this.companiess.push({
          "id": json.data[_i]._id,
          "name": json.data[_i].name,
          "description": json.data[_i].description,
          "address": json.data[_i].address,
          "phone": json.data[_i].phone,
          "webSite": json.data[_i].website,
          "rating": json.data[_i].rating,

        });
      }
    });
  }
  deleteCompany(id) {
    const companyy = this.companiess.findIndex(c => c.id === id);
    this.adminService.deleteCompany(id).subscribe((res) => {});
    this.companiess.splice(companyy, 1);
}

  // Get Current Location Coordinates
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 17;
        this.getAddress(this.latitude, this.longitude);
      });
    }
  }


  markerDragEnd($event: MouseEvent) {
    console.log($event);
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
    this.getAddress(this.latitude, this.longitude);

  }

  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: parseFloat(latitude), lng: parseFloat(longitude) } }, (results, status) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 17;
          this.address = results[0].formatted_address;
          this.latitude = latitude;
          this.longitude = longitude;
          this.tipo = results[0].types;
          this.address = results[0].formatted_address;
          this.phone = results[0].international_phone_number;
          this.website = results[0].website;
          this.rating = results[0].rating;
          this.schedule = (results[0].opening_hours.weekday_text).toString();
          this.photo = results[0].photos;


        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
  }

  save(id, name, description, employees) {
    this.adminService.InsertCompany(id, name, description, this.tipo, this.latitude, this.longitude, this.address
      , employees, this.phone, this.website, this.rating, this.schedule, this.photo).subscribe((result) => {
        console.log(result);
        if (result.error) {
          console.log(result.message);
        }
      });
  }

}