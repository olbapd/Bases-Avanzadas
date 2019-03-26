import {Component, OnInit} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestApiService } from 'src/app/rest_client/client_service';
import { Router } from '@angular/router';
import { HttpClient } from 'selenium-webdriver/http';
import { Provincia } from 'src/app/interfaces/provincia';

import { Canton } from 'src/app/interfaces/canton';

import { Distrito } from 'src/app/interfaces/distrito';

@Component({
    selector:'crud-sede',
    templateUrl:'./crud_sede.component.html',
    styleUrls:['./crud_sede.component.css']
})
export class SedeComponent implements OnInit{
    provincia:Provincia[];
    canton:Canton[];
    distrito:Distrito[];
    constructor(private modalService: NgbModal, public restApi: RestApiService,
        private router: Router){}
    ngOnInit(){}
}