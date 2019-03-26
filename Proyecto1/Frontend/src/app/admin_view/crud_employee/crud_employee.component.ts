import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestApiService } from 'src/app/rest_client/client_service';
import {HttpClient} from '@angular/common/http';

@Component({
    selector:'crud-employee',
    templateUrl:'./crud_employee.component.html',
    styleUrls:['./crud_employee.component.css']

})

export class EmployeeComponent implements OnInit{
    selectedFile:File=null;
    onFileSelected(event){
        this.selectedFile=<File>event.target.files[0];
    }
    onUpload(){
        const fd= new FormData();
        fd.append('image',this.selectedFile,this.selectedFile.name);
        this.http.post('http://API/REST',fd).subscribe(res=>{
            console.log(res);
        });
        
    }

    constructor(private modalService: NgbModal, public restApi: RestApiService, 
        private router: Router, private http:HttpClient) {

    }
    ngOnInit(){}
}