import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestApiService } from 'src/app/services/client_service';
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
    sedess: sede[]=[];
    
    constructor(private modalService: NgbModal, public restApi: RestApiService,
        private router: Router, private dialog: MatDialog) { }
        ngOnInit() { 
            this.Rsede();
        }
    
        get sedes(): sede[] { //BIND TABLE
            return this.sedess
                .map((sedess, i) => ({ id: i + 1, ...sedess }))
                .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
        }

        Rsede(){
          let idEmpleado:number=parseInt(localStorage.getItem('IdEmpleado'));
          this.restApi.getSedeXEmpleado(idEmpleado).subscribe((res)=>{
            const myObjStr = JSON.stringify(res)
               const json = JSON.parse(myObjStr);
               this.sedess = [{
                                "id":json.data[0].IdSede,
                                "name":json.data[0].Nombre[0],
                                "provincia":json.data[0].Nombre[3],
                                "canton":json.data[0].Nombre[2],
                                "distrito":json.data[0].Nombre[1],
                                "apellido1":json.data[0].Apellido1,
                                "apellido2":json.data[0].Apellido2,
                                "nombre":json.data[0].Nombre[4],
                                "cedula":"0"
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
    
        add_sede(Nombre,Ubicacion,IdDistrito,IdEstado) {
            this.restApi.setSede(Nombre,Ubicacion,IdDistrito,IdEstado);

        }
    }
  