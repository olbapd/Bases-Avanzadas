import { Component } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { BookService } from '../../../services/book.service';
import { AdminService } from '../../../services/admin.service';
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
      name: {
        title: 'Name',
        type: 'string',
      },
      category: {
        title: 'Category',
        type: 'string',
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();
  defaultPhoto:any;
  books:any;
  min:any;
  max:any;
  constructor(private bookService:BookService,
              private adminService:AdminService,
              private router: Router) {
    this.books=[];
    this.min="";
    this.max="";
    this.bookService.getAllBooks()
      .subscribe((result)=>{
        if(result.status){
          for (let i = 0; i < result.data.length; ++i) {
            if(result.data[i].foto==undefined || result.data[i].foto==""){
              result.data[i].foto=this.defaultPhoto;
            }
            let temp={
              photo: result.data[i].foto,
              issn: result.data[i]._id,
              name: result.data[i].nombre,
              category: result.data[i].tema.nombre,
              categoryId: result.data[i].tema._id,
              price: result.data[i].precio,
              description: result.data[i].descripcion,
              sold: result.data[i].cantidadVendida,
              available: result.data[i].cantidadDisponible,
            }
            this.source.append(temp);
            this.books.push(temp);
          }
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
    console.log(maxRange);
    console.log(minRange);
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
      console.log("here");
      this.source.empty();
      this.source.load(this.books);
    }
  }

}
