import {Injectable} from '@angular/core';
@Injectable()
export class Depreciation {
    constructor(){}
    straightLine(t:number,B:number,VS:number) :number{
        return (B-VS)/t;
    }
    digitSum (t:number,B:number, VS:number, d:number, n:number){
        var vidaUtil= (n*(n+1))/2;
        let anual =[0];
        let acumulada = [0];
        let valorNeto=[B];
        let fraccion=0;
        for (var i=0; i<t;i++){
            fraccion=t/vidaUtil;
            valorNeto[i]=fraccion*(B-VS);
        }

    }

}