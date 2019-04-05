import {Injectable} from '@angular/core';
@Injectable()
export class Depreciation {
    constructor(){}
    straightLine(t:number,B:number,VS:number) :number{
        return (B-VS)/t;
    }
    digitSum (t:number,B:number, VS:number, n:number){
        var vidaUtil= (n*(n+1))/2;
        let anual =[0];
        let acumulada = [0];
        let valorNeto=[B];
        let fraccion=0;
        for (var i=0; i<t;i++){
            fraccion=t-i/vidaUtil;
            anual[i+1]=fraccion*(B-VS);
            valorNeto[i+1]=valorNeto[i]-fraccion*(B-VS);           
            acumulada[i+1]=acumulada[i+1]+fraccion*(B-VS);
        }
        return [anual,acumulada,valorNeto];
    }
}