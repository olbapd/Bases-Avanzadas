import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { FormBuilder, AbstractControl, Validators, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/login.service';
@Component({
    selector: 'register',
    styleUrls: ['./register.component.scss'],
    templateUrl: './register.component.html',
})
export class RegisterComponent {
    type: FormGroup;
    validTextType: boolean = false;
    validNumberType: boolean = false;
    countries: any;
    country: any;

    constructor(private formBuilder: FormBuilder,
        private authService: AuthService) {

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
        let borndate = this.type.value.birthdate;
        let email = this.type.value.email;
        let phone = this.type.value.phone;
        let pass = this.type.value.password;
        let username = this.type.value.user;
        let typeUser = 0;

        this.authService.register(idCard, name, surname1, surname2, borndate, email, phone, pass, username, typeUser)
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