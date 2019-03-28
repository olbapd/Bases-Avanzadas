import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
  }) 

  export class JsonManagment {
  
    constructor(){
        
    }
    parseLogin(json){
        var myObjStr = JSON.stringify(json);
        var obj = JSON.parse(myObjStr);
        let result:string = obj.data;
        console.log('return is ' + result);
        return result
    }

    parseGetEstado(json){
      var count = Object.keys(json.data).length;
      let result:string[] = new Array(count);
      for (var _i = 0; _i < count; _i++) {
       result[_i]=json.data[_i].Nombre; 
    } 
        return result;
    }

    parseGetCategoria(json){
      var count = Object.keys(json.data).length;
      let result:string[] = new Array(count);
      for (var _i = 0; _i < count; _i++) {
       result[_i]=json.data[_i].Nombre; 
    } 
        return result;
   }

   parseGetProvincia(json){
    var count = Object.keys(json.data).length;
    let result:string[] = new Array(count);
    for (var _i = 0; _i < count; _i++) {
     result[_i]=json.data[_i].Nombre; 
  } 
      return result;
 }

}