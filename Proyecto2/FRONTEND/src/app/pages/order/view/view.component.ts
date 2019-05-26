import { Component } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { AdminService } from '../../../services/admin.service';
import { OrderService } from '../../../services/order.service';
import { CatalogService } from '../../../services/catalog.service';
import { LocalDataSource } from 'ng2-smart-table';

import Swal from 'sweetalert2';

@Component({
  selector: 'view',
  styleUrls: ['./view.component.scss'],
  templateUrl: './view.component.html',
})
export class ViewComponent {
  settings = {
    actions: {
      custom:[
        {
          name: 'viewDetail',
          title: '<i class="fas fa-eye"></i>'
        }
      ],
      add: false,
      edit:false,
      delete:false
    },
    columns: {
      issn: {
        title: 'ISSN',
        type: 'string',
      },
      date: {
        title: 'Date',
        type: 'string',
      },
      category: {
        title: 'Categories',
        type: 'string',
      },
      delivered: {
        title: 'Delivered',
        type: 'string',
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();
  defaultPhoto:any;
  books:any;
  min:any;
  max:any;
  categories:any;
  constructor(private adminService:AdminService,
              private catalogService:CatalogService,
              private orderService:OrderService,
              private router: Router) {
    this.books=[];
    this.min="";
    this.max="";
    this.categories=[];
    let user= JSON.parse( localStorage.getItem('user'));

    this.catalogService.getCategories()
      .subscribe((result)=>{
        if(result.status){
          this.categories = result.data;
            this.orderService.getOrdersByClient(201500002)
              .subscribe((result2)=>{
                if(result2.status){
                  for (let i = 0; i < result2.data.length; ++i) {
                    let temp={
                      issn: result2.data[i].libros,
                      delivered: result2.data[i].estado,
                      date: result2.data[i].fechaPedido,
                      category: result2.data[i].tema, 
                    }
                    let cat="";                
                    for (let j = 0; j < temp.category.length; ++j) {
                      for (let k = 0; k < this.categories.length; ++k) {
                        if(temp.category[j] == this.categories[k]._id){
                          cat=cat+this.categories[k].nombre+" "
                        }
                      }
                    }
                    temp.category= cat;
                    this.source.append(temp);
                  }
                }
              })
        }
      })   
   this.defaultPhoto="../../../../assets/book.png";
    
  }

  viewDetail(event){
    let message = " Name: "+event.data.name+
                  " Category: "+event.data.category+
                  " Price: "+ event.data.price+
                  " Sold: "+event.data.sold+
                  " Available: "+event.data.available;
    Swal({
      title: event.data.issn,
      text: message,
      imageUrl: event.data.photo,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      input: 'select',
      inputOptions: {
          "af": "Afrikaans", 
          "ar": "Arabic", 
          "az": "Azerbaijani", 
          "be": "Belarusian", 
          "bg": "Bulgarian", 
          "bn": "Bengali", 
          "bs": "Bosnian", 
          "ca": "Catalan", 
          "ceb": "Cebuano", 
          "cs": "Czech", 
          "cy": "Welsh", 
          "da": "Danish", 
          "de": "German", 
          "el": "Greek", 
          "en": "English", 
          "eo": "Esperanto", 
          "es": "Spanish", 
          "et": "Estonian", 
          "eu": "Basque", 
          "fa": "Persian", 
          "fi": "Finnish", 
          "fr": "French", 
          "ga": "Irish", 
          "gl": "Galician", 
          "gu": "Gujarati", 
          "ha": "Hausa", 
          "hi": "Hindi", 
          "hmn": "Hmong", 
          "hr": "Croatian", 
          "ht": "Haitian Creole", 
          "hu": "Hungarian", 
          "hy": "Armenian", 
          "id": "Indonesian", 
          "ig": "Igbo", 
          "is": "Icelandic", 
          "it": "Italian", 
          "iw": "Hebrew", 
          "ja": "Japanese", 
          "jw": "Javanese", 
          "ka": "Georgian", 
          "kk": "Kazakh", 
          "km": "Khmer", 
          "kn": "Kannada", 
          "ko": "Korean", 
          "la": "Latin", 
          "lo": "Lao", 
          "lt": "Lithuanian", 
          "lv": "Latvian", 
          "ma": "Punjabi", 
          "mg": "Malagasy", 
          "mi": "Maori", 
          "mk": "Macedonian", 
          "ml": "Malayalam", 
          "mn": "Mongolian", 
          "mr": "Marathi", 
          "ms": "Malay", 
          "mt": "Maltese", 
          "my": "Myanmar (Burmese)", 
          "ne": "Nepali", 
          "nl": "Dutch", 
          "no": "Norwegian", 
          "ny": "Chichewa", 
          "pl": "Polish", 
          "pt": "Portuguese", 
          "ro": "Romanian", 
          "ru": "Russian", 
          "si": "Sinhala", 
          "sk": "Slovak", 
          "sl": "Slovenian", 
          "so": "Somali", 
          "sq": "Albanian", 
          "sr": "Serbian", 
          "st": "Sesotho", 
          "su": "Sudanese", 
          "sv": "Swedish", 
          "sw": "Swahili", 
          "ta": "Tamil", 
          "te": "Telugu", 
          "tg": "Tajik", 
          "th": "Thai", 
          "tl": "Filipino", 
          "tr": "Turkish", 
          "uk": "Ukrainian", 
          "ur": "Urdu", 
          "uz": "Uzbek", 
          "vi": "Vietnamese", 
          "yi": "Yiddish", 
          "yo": "Yoruba", 
          "zh-CN": "Chinese Simplified", 
          "zh-TW": "Chinese Traditional", 
          "zu": "Zulu"
      },
      inputPlaceholder: 'Select a language for description',
      inputValidator: (value) => {
        return new Promise((resolve) => {
          
          resolve('You need to select oranges :)')
        })
      }
    })
  }

  filter(id, event){
     if(id ==1){
      this.min=event.path[0].value;
    }
    else if(id ==2){
      this.max=event.path[0].value;
    }
    let maxRange=Number(this.max);
    let minRange=Number(this.min);
    if(minRange !=0 && maxRange!=0){
        this.source.empty();
        let temp=[];
        for (let i = 0; i < this.books.length; ++i) {
          if(this.books[i].price <= maxRange && this.books[i].price>=minRange ){
            temp.push(this.books[i]);    
          }
        }
        this.source.load(temp);
    }
    else{
      this.source.empty();
      this.source.load(this.books);
    }
  }

}
