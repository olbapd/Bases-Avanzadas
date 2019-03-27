import { Component, OnInit, PipeTransform } from "@angular/core";
import { templateJitUrl } from '@angular/compiler';
import { Router } from "@angular/router";
import { AdminComponent } from 'src/app/admin_view/admin/admin.component';
import { RestApiService } from 'src/app/rest_client/client_service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { asset } from './../../interfaces/assets_Structure';
import { Categoria } from '../manage-assets/Categoria';

@Component({
    selector: 'cal-depreciation',
    templateUrl: './depreciation.component.html',
    styleUrls: ['./depreciation.component.css']

})
export class DepreciationComponent implements OnInit {
    calType=["Lineal","Suma de Digitos"];
    categoria:Categoria[];
    page = 1;
    pageSize = 4;
    activos: asset[];
    collectionSize = this.activos.length;
    activo: asset;

    get assets(): asset[] {
        return this.activos
            .map((country, i) => ({ id: i + 1, ...country }))
            .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    }
    constructor(private modalService: NgbModal, public restApi: RestApiService, private router: Router) {

    }
    public addAsset(asset: asset) {
        this.activos.push(asset);
    }

    calculate(metodo,categoria){

    }

    
    ngOnInit() {
        this.addAsset({ name: 'asda', code: 1212, depreciation: 22 });


        console.log(this.activos[0].name); //=> 0:{id: "222", category: "testcat", event_name: "name"}

    }


}