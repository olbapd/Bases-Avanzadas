import { Component, OnInit } from '@angular/core';
import {Estado} from '../manage-assets/Estado';
import {RestApiService} from 'src/app/rest_client/client_service';

@Component({
  selector: 'app-manage-assets',
  templateUrl: './manage-assets.component.html',
  styleUrls: ['./manage-assets.component.css']
})
export class ManageAssetsComponent implements OnInit {
  estado:Estado[];
  

  constructor(public restApi: RestApiService) {
   }

  ngOnInit() {
    this.estado =  this.restApi.getEstado(); 
    
  }

  registrar_activo(nombre,descripcion,fecha_compra,precio_compre,valor_residual,detalle_ubicacion,codigo,categoria,fecha_registro,tiempo_garantia,vida_util,centro_costo,estado){
    console.log(estado);
  }

  modificar_estado_activo(activo,estado_activo){
    console.log(activo);
  }

}
