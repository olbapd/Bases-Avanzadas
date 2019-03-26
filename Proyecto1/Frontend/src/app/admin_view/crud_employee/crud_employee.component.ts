import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestApiService } from 'src/app/rest_client/client_service';
import { HttpClient } from '@angular/common/http';
import { Estado } from './../manage-assets/Estado';
import { sede } from '../../interfaces/sede';
import { department } from '../../interfaces/department';
import { jobs } from '../../interfaces/jobs';
import { Categoria } from '../manage-assets/Categoria';
import { asset } from 'src/app/interfaces/assets_Structure';


@Component({
    selector: 'crud-employee',
    templateUrl: './crud_employee.component.html',
    styleUrls: ['./crud_employee.component.css']

})

export class EmployeeComponent implements OnInit {
    sede: sede[];
    estado: Estado[];
    puestos: jobs[];
    departamento: department[];
    selectedFile: File = null;


    categoria: Categoria[];
    page = 1;
    pageSize = 4;
    activos: asset[] = [{
        name: "as",
        code: 123,
        depreciation: 123
    }
    ];
    collectionSize = this.activos.length;
    activo: asset;

    get assets(): asset[] {
        return this.activos
            .map((country, i) => ({ id: i + 1, ...country }))
            .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    }


    onFileSelected(event) {
        this.selectedFile = <File>event.target.files[0];
    }



    onUpload() {
        const fd = new FormData();
        fd.append('image', this.selectedFile, this.selectedFile.name);
        this.http.post('http://API/REST', fd).subscribe(res => {
            console.log(res);
        });

    }

    constructor(private modalService: NgbModal, public restApi: RestApiService,
        private router: Router, private http: HttpClient) {

    }
    ngOnInit() { }
}