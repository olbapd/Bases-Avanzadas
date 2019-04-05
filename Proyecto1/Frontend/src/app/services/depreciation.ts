import {Injectable} from '@angular/core';
@Injectable()
export class Depreciation {
    constructor(){}
    straightLine(t:number,B:number,VS:number){
        var depAnual=(B-VS)/t;
        let anual =[0];
        for (var i=0; i<t;i++){
            anual[i]=VS+((i+1)*depAnual);
        }
        return anual;
    }

    getDep(t:number,B:number,VS:number){
        return (B-VS)/t;

    }
    digitSum (t:number,B:number, VS:number){
        
        var vidaUtil= (t*(t+1))/2;
        let anual =[0];
        let acumulada = [0];
        let valorNeto=[B];
        let fraccion=0;
        for (var i=0; i<t;i++){
            fraccion=(t-i)/vidaUtil;
            anual[i+1]=fraccion*(B-VS);
            valorNeto[i+1]=valorNeto[i]-fraccion*(B-VS);           
            acumulada[i+1]=acumulada[i]+anual[i+1];
        }
        return [anual,acumulada,valorNeto];
    }
}