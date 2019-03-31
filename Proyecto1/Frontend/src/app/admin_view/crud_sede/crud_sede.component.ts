import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestApiService } from 'src/app/rest_client/client_service';
import { Router } from '@angular/router';
import { asset } from 'src/app/interfaces/assets_Structure';
import { sede } from 'src/app/interfaces/sede';
import { MatDialog, MatPaginator, MatSort, MatDialogConfig } from '@angular/material';
import { EmployeeComponent } from '../crud_employee/crud_employee.component';
import { updateComponent } from '../dialogs/update_employee/update-employee.component';
import { DeleteComponent } from '../dialogs/delete_confirm/delete_confirm.component';
import { UpdateSedeComponent } from '../dialogs/update_sede/udpate-sede.component';

@Component({
    selector: 'crud-sede',
    templateUrl: './crud_sede.component.html',
    styleUrls: ['./crud_sede.component.css']
})
export class SedeComponent implements OnInit {
  
    isPopupOpened = false;
    provincia;
    canton;
    distrito;
    empleado;

    type = 0;
    categoria;
    page = 1;
    pageSize = 4;
    sedess: sede[]; /* =data= [{
        idSede:1
        NombreSede: "as",
        provincia: "cartago",
        distrito: "paraiso",
        canton: "paraiso",
        admin: "Pablo"
    }
    ]; */

   /*  collectionSize = this.sedess.length;
    activo: asset;
    sede: sede; */

    
    constructor(private modalService: NgbModal, public restApi: RestApiService,
        private router: Router, private dialog: MatDialog) { }
        ngOnInit() { 
            this.EstadoDropdown();
            this.ProvinciaDropdown();
           this.Rsede();
        }
    
        get sedes(): sede[] { //BIND TABLE
            return this.sedess
                .map((sedess, i) => ({ id: i + 1, ...sedess }))
                .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
        }

        Rsede(){
          let idEmpleado:number=parseInt(localStorage.getItem('IdEmpleado'));
          this.restApi.getSedeXEmpleado(1).subscribe((res)=>{
            const myObjStr = JSON.stringify(res)
               const json = JSON.parse(myObjStr);
               this.sedess = [{
                                "id":json.data[0].IdSede,
                                "name":json.data[0].Nombre[0],
                                "provincia":json.data[0].Nombre[3],
                                "canton":json.data[0].Nombre[2],
                                "distrito":json.data[0].Nombre[1],
                                "admin":json.data[0].Nombre[4],
                              }];
            
          });
          }
    
        updateSede() {
            this.isPopupOpened = true;
            const dialogRef = this.dialog.open(UpdateSedeComponent, {
                data: {}
            });
        }
        deleteSede() {
            this.isPopupOpened = true;
            const dialogRef = this.dialog.open(DeleteComponent, {
                data: {}
            });
        }
    
        add_sede(name, code, description, provincia, canton, distrito, estado, employee, fecha_ingreso) {
            this.restApi.putSede(name, code, description, provincia, canton, distrito, estado, employee, fecha_ingreso);
    
        }
    
        EstadoDropdown(){
            let optionestado;
            let dropdown = document.getElementById('estadoSede-Dropdown');
             this.restApi.getEstados().subscribe((res)=>{
               const myObjStr = JSON.stringify(res)
               const json = JSON.parse(myObjStr);
              var count = Object.keys(json.data).length;
              for (var _i = 0; _i < count; _i++) {
                optionestado = document.createElement('option');
                optionestado.text = json.data[_i].Nombre;
                optionestado.value = json.data[_i].IdEstado;
                dropdown.append(optionestado);
             } 
          });;
          }
    
          DistritoDropdown(){
            let optionestado;
            let dropdown = document.getElementById('distrito-Dropdown');
             this.restApi.getDistritos().subscribe((res)=>{
               const myObjStr = JSON.stringify(res)
               const json = JSON.parse(myObjStr);
              var count = Object.keys(json.data).length;
              for (var _i = 0; _i < count; _i++) {
                optionestado = document.createElement('option');
                optionestado.text = json.data[_i].Nombre;
                optionestado.value = json.data[_i].IdEstado;
                dropdown.append(optionestado);
             } 
          });;
          }
    
          ProvinciaDropdown(){
            let optionestado;
            let dropdown = document.getElementById('provincia-Dropdown');
             this.restApi.getProvincia().subscribe((res)=>{
               const myObjStr = JSON.stringify(res)
               const json = JSON.parse(myObjStr);
              var count = Object.keys(json.data).length;
              for (var _i = 0; _i < count; _i++) {
                optionestado = document.createElement('option');
                optionestado.text = json.data[_i].Nombre;
                optionestado.value = json.data[_i].IdProvincia;
                dropdown.append(optionestado);
             } 
          });;
          }
    }