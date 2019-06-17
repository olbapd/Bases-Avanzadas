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
            id: {
                title: 'ID',
            },
            name: {
                title: 'Full Name',
            },
            username: {
                title: 'User Name',
            },
            email: {
                title: 'Email',
            },
        },
    };


    data = [
        {
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz"
        },
        {
            id: 2,
            name: "Ervin Howell",
            username: "Antonette",
            email: "Shanna@melissa.tv"
        },

        // ... list of items

        {
            id: 11,
            name: "Nicholas DuBuque",
            username: "Nicholas.Stanton",
            email: "Rey.Padberg@rosamond.biz"
        }
    ];

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