import { Component, OnInit } from '@angular/core';
import {RestApiService} from 'src/app/rest_client/client_service';
import { Router } from "@angular/router";
import {JsonManagment} from 'src/app/json_managment/json_service';


@Component({
  selector: 'app-manage-assets',
  templateUrl: './manage-assets.component.html',
  styleUrls: ['./manage-assets.component.css']
})
export class ManageAssetsComponent implements OnInit {
  estado;
  categoria;
  activos;
  codigos;
  

  constructor(public restApi: RestApiService,private router: Router,public json: JsonManagment) {
   }

  ngOnInit() {
     this.restApi.getEstados().subscribe((res)=>{
      this.estado = this.json.parseGetEstado(res);
  });; 
   this.restApi.getCategorias().subscribe((res)=>{
    this.categoria = this.json.parseGetCategoria(res);
});; 
    //this.activos = this.restApi.getActivos();
    
  }

  registrar_activo(nombre,descripcion,fecha_compra,precio_compre,valor_residual,detalle_ubicacion,codigo,categoria,fecha_registro,tiempo_garantia,vida_util,centro_costo,estado){
    console.log(estado);
    
  }

  modificar_estado_activo(activo,estado_activo){
    console.log(activo);
  }
  asignar_activo(activo,fecha_asignacion,codigo,id_empleado,detalle_entrega){
    console.log(activo);

  }
  selected(activo){
    //console.log(activo);
    this.codigos = this.restApi.getCodigos();

  }
  
   

}


