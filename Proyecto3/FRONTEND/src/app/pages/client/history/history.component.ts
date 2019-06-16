import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { FormBuilder, AbstractControl, Validators, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { HistoryService } from 'src/app/services/history.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
    selector: 'history',
    styleUrls: ['./history.component.css'],
    templateUrl: './history.component.html',
})
export class HistoryComponent {
    type: FormGroup;
    validTextType: boolean = false;
    validNumberType: boolean = false;
    countries: any;
    country: any;
    page = 1;
    pageSize = 4;
    source: LocalDataSource = new LocalDataSource();
    defaultPhoto: any;
    books: any;
    min: any;
    max: any;
    constructor(private formBuilder: FormBuilder,
        private historyService: HistoryService) {

        this.type = this.formBuilder.group({
            code: [null, Validators.required],
            name: [null, Validators.required],
            country: [null, Validators.required],
            phone: [null, Validators.required],
            address: [null, Validators.required],
            openHours: [null, Validators.required],

        });

/*
        this.books = [];
        this.min = "";
        this.max = "";
        this.bookService.getAllBooks()
            .subscribe((result) => {
                if (result.status) {
                    for (let i = 0; i < result.data.length; ++i) {
                        if (result.data[i].foto == undefined || result.data[i].foto == "") {
                            result.data[i].foto = this.defaultPhoto;
                        }
                        let temp = {
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

        this.defaultPhoto = "../../../../assets/book.png"; */

    }


    addNewUser() {

        let idCard = this.type.value.idcard;
        let name = this.type.value.name;
        let surname1 = this.type.value.surname1;
        let surname2 = this.type.value.surname2;
        let borndate = this.type.value.borndate;
        let email = this.type.value.email;
        let phone = this.type.value.phone;
        let pass = this.type.value.pass;
        let username = this.type.value.username;
        let typeUser = 0;

        console.log(idCard);
        console.log(name);
        console.log(surname1);
        console.log(surname2);
        console.log(borndate);
        console.log(email);

        this.historyService.getPedidos(0)
            .subscribe((result) => {
                if (result.error) {
                    console.log(result.message);
                }
                else {
                    console.log("CORRECTAMENTE");
                }
            })
    }



}