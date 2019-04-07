import { Component, OnInit, Inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestApiService } from 'src/app/services/client_service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { updateComponent } from '../update_employee/update-employee.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import{formatDate} from '@angular/common';

@Component({
    selector: 'update-sede',
    templateUrl: './update-sede.component.html',
    styleUrls: ['./update-sede.component.css']
})

export class UpdateSedeComponent implements OnInit {
    submitted = false;
    form: FormGroup;

    constructor(private modalService: NgbModal, public restApi: RestApiService,
        private router: Router, private dialogRef: MatDialogRef<UpdateSedeComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }
    ngOnInit() {
        this.form = new FormGroup({
            Cedula: new FormControl('', Validators.required)
        });

    }

    onSubmit() {
        this.submitted = true;
        let cedula = this.form.get('Cedula').value;
        let btn = document.getElementById('modifSede-btn');
        if (this.form.invalid) {
            btn.setAttribute('class', 'btn btn-danger');
            return;
        }
        else {
            let FechaActual = formatDate(new Date(),'yyyy-MM-dd','en');
            this.restApi.updateAdminSede(this.data.cedula, cedula, this.data.IdSede,FechaActual,FechaActual).subscribe((res) => {
                btn.setAttribute('class', 'btn btn-success');
                window.location.reload();
            });

        }

    }

    get f() { return this.form.controls; }

    onNoClick(): void {
        this.dialogRef.close();
    }

}