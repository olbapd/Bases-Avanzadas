import { Component } from '@angular/core';
/*import { DireccionService } from '../../../@core/data/direccion.service';
import { ActividadesService } from '../../../@core/data/actividades.service';
import { ClasificacionService } from '../../../@core/data/clasificacion.service';
import { ClienteService } from '../../../@core/data/cliente.service';
*/

@Component({
  selector: 'agregar',
  styleUrls: ['./agregar.component.scss'],
  templateUrl: './agregar.component.html',
})


export class AgregarComponent {
	/*modelCliente : any;
  
  clasifList: any;
  activList: any;

  currentProvince: any;

  cantones: any;
  provincias :any; 
  distritos : any;
  
  cantonIndex: number;
  provinceIndex:number;
  districtIndex:number; */

  constructor(/*private direccionService : DireccionService,
              private actividadesService : ActividadesService,
              private clasificacionService : ClasificacionService,
              private clienteService : ClienteService*/ ) {
    /*this.activList = ["No hay actividades"];
    this.actividadesService.getActividadesList()
      .subscribe( (data) =>  {
        this.activList=data.actividades;
    });
    this.clasifList=["No hay clasificaciones"];
    this.clasificacionService.getClasificacionList()
      .subscribe( (data )=>{
        this.clasifList= data.clasificaciones;
    });
    this.provincias =[];
    this.cantones=[];
    this.distritos=[];
    this.provincias.push({nombre:"San José"});
    this.provincias.push({nombre:"Alajuela"});
    this.provincias.push({nombre:"Cartago"});
    this.provincias.push({nombre:"Heredia"});
    this.provincias.push({nombre:"Guanacaste"});
    this.provincias.push({nombre:"Puntarenas"});
    this.provincias.push({nombre:"Limón"});
   	
    this.modelCliente =
      {
        nombre: "Alo",
        cedula: 456,
        nombreCom: "asd",
        telefono: 2,
        celular: 13,
        correo: "fdf",
        sobregiro: 123,
        descuento: 15,
        limCred: 3432,
        plazoCred: 565,
        apoderado: "Aa",
        cedulaApoderado: 1234,
        envio: "asd",
        encomienda: "sads",
      }
   }

  changeProvincia(event){
    if(event == "San José"){
      this.currentProvince = this.direccionService.getSanJose();
      this.provinceIndex=1;
    }
    else if(event == "Alajuela"){
      this.currentProvince = this.direccionService.getAlajuela();
      this.provinceIndex=2;
    }
    else if(event == "Cartago"){
      this.currentProvince = this.direccionService.getCartago();
      this.provinceIndex=3;
    }
    else if(event == "Heredia"){
      this.currentProvince = this.direccionService.getHeredia();
      this.provinceIndex=4;
    }
    else if(event == "Guanacaste"){
      this.currentProvince = this.direccionService.getGuanacaste();
      this.provinceIndex=5;
    }
    else if(event == "Puntarenas"){
      this.currentProvince = this.direccionService.getPuntarenas();
      this.provinceIndex=6;
    }
    else if(event == "Limón"){
      this.currentProvince = this.direccionService.getLimon();
      this.provinceIndex=7;
    }
    
    this.cantones=[];
   
    this.cantonIndex=1;
    for (let i = 0; i < this.currentProvince.cantones.length; ++i) {
      let nom = this.currentProvince.cantones[i].nombre;
      let idCanton = +this.currentProvince.cantones[i].id;
      this.cantones.push({nombre:nom, id:idCanton});
    }

    this.districtIndex=1;
    let distritosCanton = this.currentProvince.cantones[0].distritos;
    this.distritos=[];
    for (let i = 0; i < distritosCanton.length; ++i) {
      let nom = distritosCanton[i].nombre;
      let idCanton = +distritosCanton[i].id;
      this.distritos.push({nombre:nom, id:idCanton});
    }

    //console.log((this.provinceIndex*10000)+(this.cantonIndex*100)+this.districtIndex);*/
  }

  /*changeCanton(event){

    for (let i = 0; i < this.cantones.length; ++i) {
      if(this.cantones[i].nombre == event){
        this.cantonIndex = this.cantones[i].id;
        break;
      }
    }
    let distritosCanton = this.currentProvince.cantones[this.cantonIndex].distritos;
    this.distritos=[];
    for (let i = 0; i < distritosCanton.length; ++i) {
      let nom = distritosCanton[i].nombre;
      let idCanton = +distritosCanton[i].id;
      this.distritos.push({nombre:nom, id:idCanton});
    }
  }
  changeDistrito(event){
    for (let i = 0; i < this.distritos.length; ++i) {
      if(this.distritos[i].nombre == event){
        this.districtIndex = this.distritos[i].id;
        break;
      }
    }
  }
  changeClasificacion(event){}
  changeActividad(event){}

  onSubmit() { 

    
    let clientInfo : String[] = [];
    let infoMeaning : String [] = [];
    clientInfo.push(this.modelCliente.nombre.toUpperCase()); infoMeaning.push('nombre');
    clientInfo.push(this.modelCliente.cedula); infoMeaning.push('cedula');
    clientInfo.push(this.modelCliente.nombreCom); infoMeaning.push('nombreCon');
    clientInfo.push(this.modelCliente.telefono); infoMeaning.push('telefono');
    clientInfo.push(this.modelCliente.celular); infoMeaning.push('celular');
    clientInfo.push(this.modelCliente.correo); infoMeaning.push('correo');
    clientInfo.push(this.modelCliente.sobregiro); infoMeaning.push('sobregiro');
    clientInfo.push(this.modelCliente.descuento); infoMeaning.push('descuento');
    clientInfo.push(this.modelCliente.limCred); infoMeaning.push('limCred');
    clientInfo.push(this.modelCliente.plazoCred); infoMeaning.push('plazoCred');
    clientInfo.push(this.modelCliente.apoderado); infoMeaning.push('apoderado');
    clientInfo.push(this.modelCliente.cedulaApoderado); infoMeaning.push('cedulaApoderado');
    clientInfo.push(this.modelCliente.envio); infoMeaning.push('envio');
    clientInfo.push(this.modelCliente.encomienda); infoMeaning.push('encomienda');
    
    this.clienteService.addClient(clientInfo, infoMeaning);
  }*/ 

}