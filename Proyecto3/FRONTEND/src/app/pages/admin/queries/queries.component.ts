import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { FormBuilder, AbstractControl, Validators, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
    selector: 'queries',
    styleUrls: ['./queries.component.css'],
    templateUrl: './queries.component.html',
})
export class QueriesComponent {
    type: FormGroup;
    validTextType: boolean = false;
    validNumberType: boolean = false;
    countries: any;
    country: any;

    constructor(private formBuilder: FormBuilder) {

        this.type = this.formBuilder.group({
            code: [null, Validators.required],
            name: [null, Validators.required],
            country: [null, Validators.required],
            phone: [null, Validators.required],
            address: [null, Validators.required],
            openHours: [null, Validators.required],

        });
    }
}