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
    settings = {
        delete: {
            confirmDelete: true,

            deleteButtonContent: 'Delete data',
            saveButtonContent: 'save',
            cancelButtonContent: 'cancel'
        },
        add: {
            confirmCreate: true,
        },
        edit: {
            confirmSave: true,
        },
        columns: {
            products: {
                title: 'Productos',
                type: 'string',
            },
            amount: {
                title: 'Cantidad',
                type: 'number',
            },
            price: {
                title: 'Precio',
                type: 'number',
            },
            observation: {
                title: 'Observacion',
                type: 'string',
            },
            totalcash: {
                title: 'Precio Total',
                type: 'number',
            },
            state: {
                title: 'Estado',
                type: 'string',
            },
            date: {
                title: 'Fecha',
                type: 'string',
            },
            total: {
                title: 'Total',
                type: 'number',
            },

        },
    };
    user:any;
    pedidos: any;
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

        let user1=JSON.parse(localStorage.getItem('user'));
		this.user=user1.username;

        this.pedidos = [];

        this.historyService.getPedidos(this.user).subscribe((result) => {
            if (result.status) {
                for (let i = 0; i < result.data.length; ++i) {
                    let cantidad=result.data[i].total;
                    for (let j = 0; j < cantidad; ++j) {
                        let temp = {
                            products: result.data[i].products[j],
                            amount: result.data[i].amount[j],
                            price: result.data[i].price[j],
                            date: result.data[i].date,
                            state: result.data[i].state,
                            totalcash: result.data[i].totalcash,
                            observation: result.data[i].observation,
                            total: result.data[i].total
                        }
                        this.source.append(temp);
                        console.log("TEMP:");
                        console.log(temp);

                    }

                }
            }
        })

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


    onDeleteConfirm(event) {
        console.log("Delete Event In Console")
        console.log(event);
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        } else {
            event.confirm.reject();
        }
    }

    onCreateConfirm(event) {
        console.log("Create Event In Console")
        console.log(event);

    }

    onSaveConfirm(event) {
        console.log("Edit Event In Console")
        console.log(event);
    }


}