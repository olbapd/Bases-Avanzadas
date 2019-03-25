import { Component, OnInit } from '@angular/core';
import {Estado} from '../manage-assets/Estado';
import {Categoria} from '../manage-assets/Categoria';
import {Activos} from '../manage-assets/Activos';
import {Codigos} from '../manage-assets/Codigos';
import {RestApiService} from 'src/app/rest_client/client_service';
import { Router } from "@angular/router";
import { AdminComponent} from "../admin/admin.component"

@Component({
  selector: 'app-manage-assets',
  templateUrl: './manage-assets.component.html',
  styleUrls: ['./manage-assets.component.css']
})
export class ManageAssetsComponent implements OnInit {
  estado:Estado[];
  categoria:Categoria[];
  activos:Activos[];
  codigos:Codigos[];
  

  constructor(public restApi: RestApiService,private router: Router) {
   }

  ngOnInit() {
    this.estado =  this.restApi.getEstados(); 
    this.categoria = this.restApi.getCategorias();
    this.activos = this.restApi.getActivos();
    
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


