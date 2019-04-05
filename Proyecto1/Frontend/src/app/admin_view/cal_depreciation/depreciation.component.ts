import { Component, OnInit, PipeTransform } from "@angular/core";
import { templateJitUrl } from '@angular/compiler';
import { Router } from "@angular/router";
import { AdminComponent } from 'src/app/admin_view/admin/admin.component';
import { RestApiService } from 'src/app/services/client_service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { asset } from './../../interfaces/assets_Structure';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Depreciation } from 'src/app/services/depreciation';

interface Country {
    name: string;
    flag: string;
    area: number;
    population: number;
}

const COUNTRIES: Country[] = [
    {
        name: 'Russia',
        flag: 'f/f3/Flag_of_Russia.svg',
        area: 17075200,
        population: 146989754
    },
    {
        name: 'Canada',
        flag: 'c/cf/Flag_of_Canada.svg',
        area: 9976140,
        population: 36624199
    },
    {
        name: 'United States',
        flag: 'a/a4/Flag_of_the_United_States.svg',
        area: 9629091,
        population: 324459463
    },
    {
        name: 'China',
        flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
        area: 9596960,
        population: 1409517397
    }
];

function search(text: string, pipe: PipeTransform): Country[] {
    return COUNTRIES.filter(country => {
        const term = text.toLowerCase();
        return country.name.toLowerCase().includes(term)
            || pipe.transform(country.area).includes(term)
            || pipe.transform(country.population).includes(term);
    });
}




@Component({
    selector: 'cal-depreciation',
    templateUrl: './depreciation.component.html',
    styleUrls: ['./depreciation.component.css'],
    providers: [DecimalPipe]

})
export class DepreciationComponent implements OnInit {
    countries$: Observable<Country[]>;
    filter = new FormControl('');

    calType = ["Lineal", "Suma de Digitos"];
    categoria;

    calculos:asset[]=[];

    constructor(public calcular:Depreciation, pipe: DecimalPipe, private modalService: NgbModal, public restApi: RestApiService, private router: Router) {
        this.countries$ = this.filter.valueChanges.pipe(
            startWith(''),
            map(text => search(text, pipe))
        );


    }


  

    calculate(metodo, categoria){
        let option;
        this.restApi.getCalculos().subscribe((res)=>{
        const myObjStr = JSON.stringify(res)
        const json = JSON.parse(myObjStr);
        var count = Object.keys(json.data).length;
        for (var _i = 0; _i < count; _i++) {
            this.calculos.push({
                "codigo":json.data[_i].Codigo,
                "PorcentajeDepreciacion":json.data[_i].PorcentajeDepreciacion,
                "precio":json.data[_i].Precio,
                "Anho":json.data[_i].Anho[0],
                "ValorResidual":json.data[_i].ValorResidual[1],
                "CentroCosto":json.data[_i].CentroCosto[2]
        
             });
         }
    });
    }


    ngOnInit() {


    }


}