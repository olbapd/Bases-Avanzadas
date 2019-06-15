import { Component,OnInit } from '@angular/core';
import { FormGroupDirective, NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, AbstractControl, Validators, FormControl } from '@angular/forms';
import {company} from '../../../interfaces/company';
import { AdminService } from '../../../services/admin.service';;

@Component({
    selector: 'products',
    styleUrls: ['./products.component.css'],
    templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit{
    form: FormGroup;
    submitted = false;
    company: company[];

    constructor(private formBuilder: FormBuilder,
        private adminService: AdminService) {

        
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
            this.adminService.InsertProduct(ProductId,Name,Description,Value,Company,Photo).subscribe((res) => {
                console.log(res);
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
}