import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
  }) 

  export class JsonManagment {
  
    constructor(){
        
    }

    parseLogin(json){
        //var myObjStr = JSON.stringify(json);
        var obj = JSON.parse(json);
        let result:string = obj.data;
        console.log('return is ' + result);
        return result


    }



}