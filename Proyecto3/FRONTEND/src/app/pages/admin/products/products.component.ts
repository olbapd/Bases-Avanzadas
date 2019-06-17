import { Component,OnInit } from '@angular/core';
import { FormGroupDirective, NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, AbstractControl, Validators, FormControl } from '@angular/forms';
import {companyP} from '../../../interfaces/companyproduct';
import { AdminService } from '../../../services/admin.service';
import { FotoService } from '../../../services/foto.service';

@Component({
    selector: 'products',
    styleUrls: ['./products.component.css'],
    templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit{
    form: FormGroup;
    submitted = false;
    companiess: companyP[]=[];
    page = 1;
    pageSize = 4;
    collectionSize: number = 0;
    searchText;
    photo: any;

    constructor(private formBuilder: FormBuilder,
        private adminService: AdminService,
        private fotoService: FotoService) {

        
    }
    get f() { return this.form.controls; }
    ngOnInit() {
        this.form = new FormGroup({
            ProductId: new FormControl('', Validators.required),
            Name: new FormControl('', Validators.required),
            Description: new FormControl('', Validators.required),
            Value: new FormControl('', Validators.required),
            Company: new FormControl('', Validators.required)


        });
        this.company_DropDown();
        this.Product();
    }
    get companies(): companyP[] { //BIND TABLE
        return this.companiess
          .map((companiess, i) => ({ id: i + 1, ...companiess }))
          .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
      }
      Product() {
        this.adminService.getProduct().subscribe((res) => {
          const myObjStr = JSON.stringify(res)
          const json = JSON.parse(myObjStr);
          var count = Object.keys(json.data).length;
          this.collectionSize = count;
          for (var _i = 0; _i < count; _i++) {
            this.companiess.push({
              "id": json.data[_i].company,
              "idproduct": json.data[_i]._id,
              "name": json.data[_i].name,
              "value": json.data[_i].price,
            });
          }
        });
      }
      deleteCompany(id) {
        const companyy = this.companiess.findIndex(c => c.id === id);
        this.adminService.deleteProduct(id).subscribe((res) => {});
        this.companiess.splice(companyy, 1);
    }
    onSubmit() {
        this.submitted = true;
        let ProductId = this.form.get('ProductId').value;
        let Name = this.form.get('Name').value;
        let Description = this.form.get('Description').value;
        let Value = this.form.get('Value').value;
        let Company = this.form.get('Company').value;
        let Photo ="";
       
        // stop here if form is invalid
        let btn = document.getElementById('registrar_btn');
        if (this.form.invalid) {
            btn.setAttribute('class', 'btn btn-danger');
            return;
        }
        else {
            btn.setAttribute('class', 'btn btn-success');
            this.fotoService.uploadFile(this.photo)
                .subscribe((data) => {
                    let photoHash = (data && data.hash) ? data.hash : null;
                    console.log(photoHash);
                    this.adminService.InsertProduct(ProductId,Name,Description,Value,Company,photoHash).subscribe((res) => {
                        console.log(res);
                    });
                    
                });
            
        }
    }
    company_DropDown() {
        let option;
        let dropdowndep = document.getElementById('dep-Company');
        this.adminService.getCompany().subscribe((res) => {
            const myObjStr = JSON.stringify(res)
            const json = JSON.parse(myObjStr);
            var count = Object.keys(json.data).length;
            for (var _i = 0; _i < count; _i++) {
                option = document.createElement('option');
                option.text = json.data[_i].name;
                option.value = json.data[_i]._id;
                dropdowndep.append(option);
            }
        });
    }
    onPhotoChange(event) {
        this.photo = event.target.files[0];
        this.fotoService.uploadFile(this.photo)
        .subscribe((data) => {
            let photoHash = (data && data.hash) ? data.hash : null;
            console.log(photoHash);
            let img_load = document.getElementById('img');
           let photo_load = this.fotoService.downloadFile(photoHash);
            img_load.setAttribute('src',photo_load);
            
                });
    }
}