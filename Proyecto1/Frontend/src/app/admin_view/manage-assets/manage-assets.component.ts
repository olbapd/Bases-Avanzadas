import { Component, OnInit, Input, Output } from '@angular/core';
import { RestApiService } from 'src/app/services/client_service';
import { Router } from "@angular/router";
import { MatDialog } from '@angular/material';
import { CodeErrorComponent } from '../dialogs/code_error/code_error.component';
import { Options } from 'selenium-webdriver/edge';
import { all } from 'q';
import { FormBuilder, FormGroup, AbstractControl, Validators, FormControl } from '@angular/forms';
import { FotoService } from '../../services/foto.service';



@Component({
  selector: 'app-manage-assets',
  templateUrl: './manage-assets.component.html',
  styleUrls: ['./manage-assets.component.css']
})
export class ManageAssetsComponent implements OnInit {
  photo: any;
  form: FormGroup;
  formModif: FormGroup;
  formAsig: FormGroup;
  submitted = false;
  submitted2 = false;
  submitted3 = false;
  isPopupOpened = false;
  constructor(public restApi: RestApiService, private router: Router, private dialog: MatDialog, private formBuilder: FormBuilder, private fotoService: FotoService) {

  }
  ngOnInit() {
    this.form = new FormGroup({
      Nombre: new FormControl('', Validators.required),
      Descripcion: new FormControl('', Validators.required),
      FechaCompra: new FormControl('', Validators.required),
      PrecioCompra: new FormControl('', Validators.required),
      ValorResidual: new FormControl('', Validators.required),
      Codigo: new FormControl('', Validators.required),
      Categoria: new FormControl('', Validators.required),
      Depreciacion: new FormControl('', Validators.required),
      TiempoGarantia: new FormControl('', Validators.required),
      VidaUtil: new FormControl('', Validators.required),
      CentroCosto: new FormControl('', Validators.required),
      Moneda: new FormControl('', Validators.required),
      FechaR: new FormControl('', Validators.required)

    });
    this.formModif = new FormGroup({
      categoria3: new FormControl('', Validators.required),
      codigo_modif_state: new FormControl('', Validators.required),
      estado3: new FormControl('', Validators.required)
    });

    this.formAsig = new FormGroup({
      Accion: new FormControl('', Validators.required),
      CedulaAsig: new FormControl('', Validators.required),
      DetalleU: new FormControl('', Validators.required),
      CategoriaAsig: new FormControl('', Validators.required),
      CodigoaAsig: new FormControl('', Validators.required)
    });
    this.CategoriaDropdown();
    this.AccionDropDown();
    this.MonedasDropdown();

  }
  get f() { return this.form.controls; }
  get f2() { return this.formModif.controls; }
  get f3() { return this.formAsig.controls; }
  onPhotoChange(event) {
    this.photo = event.target.files[0];
    this.fotoService.uploadFile(this.photo)
      .subscribe((data) => {
        let photoHash = (data && data.hash) ? data.hash : null;
        console.log(photoHash);
        let img_load = document.getElementById('imgActivo');
        let photo_load = this.fotoService.downloadFile(photoHash);
        img_load.setAttribute('src', photo_load)

      });
  }
  onSubmit() {
    this.submitted = true;
    let nombre = this.form.get('Nombre').value;
    let descripcion = this.form.get('Descripcion').value;
    let fecha_compra = this.form.get('FechaCompra').value;
    let precio_compre = this.form.get('PrecioCompra').value;
    let valor_residual = this.form.get('ValorResidual').value;
    let codigo = this.form.get('Codigo').value;
    let depreciacion = this.form.get('Depreciacion').value;
    let categoria = this.form.get('Categoria').value;
    let tiempo_garantia = this.form.get('TiempoGarantia').value;
    let vida_util = this.form.get('VidaUtil').value;
    let centro_costo = this.form.get('CentroCosto').value;
    let moneda = this.form.get('Moneda').value;
    let FechaR = this.form.get('FechaR').value;
    let btn = document.getElementById('registrar_btn');

    // stop here if form is invalid
    if (this.form.invalid) {
      btn.setAttribute('class', 'btn btn-danger');
      return;
    }
    else {
      //Se debe almacenar la imagen primero
      this.fotoService.uploadFile(this.photo)
        .subscribe((data) => {
          let photoHash = (data && data.hash) ? data.hash : null;
          console.log(photoHash);
          this.restApi.getActivoXCodigo(codigo).subscribe((res) => {
            const myObjStr = JSON.stringify(res)
            const json = JSON.parse(myObjStr);
            if (json.data[0] == null) {
              let idEmpleado: number = parseInt(localStorage.getItem('IdEmpleado'));
              this.restApi.getSedeXEmpleado(idEmpleado).subscribe((res) => {
                const myObjStr = JSON.stringify(res)
                const json = JSON.parse(myObjStr);
                let IdSede = json.data[0].IdSede;
                this.restApi.setActivo(codigo, nombre, descripcion, photoHash, precio_compre, tiempo_garantia, vida_util, depreciacion, fecha_compra, FechaR, centro_costo, valor_residual, categoria, moneda, IdSede).subscribe((res) => { });;
                btn.setAttribute('class', 'btn btn-success');
              });

            }

            else {
              btn.setAttribute('class', 'btn btn-danger');
              this.isPopupOpened = true;
              const dialogRef = this.dialog.open(CodeErrorComponent);

            }
          });;
        });



    }
  }
  onSubmit2() {
    this.submitted2 = true;
    let btn = document.getElementById('modifstate_btn');
    let Codigo = this.formModif.get('codigo_modif_state').value;
    let IdEstado = this.formModif.get('estado3').value;

    // stop here if form is invalid
    if (this.formModif.invalid) {
      btn.setAttribute('class', 'btn btn-danger');
      return;
    }
    else {

      if (IdEstado == 5) {
        this.restApi.getQuitarActivo(Codigo, IdEstado).subscribe((res) => {
          const myObjStr = JSON.stringify(res)
          const json = JSON.parse(myObjStr);

          if (json.success == true) {
            btn.setAttribute('class', 'btn btn-success');
            this.UpdateEstado(Codigo);
            //window.alert("Estado del Activo Código:"+" "+Codigo+" "+"modificado de forma exitosa");
          }
        });;
      }
      else {
        this.restApi.getCambiarEstadoActivo(Codigo, IdEstado).subscribe((res) => {
          const myObjStr = JSON.stringify(res)
          const json = JSON.parse(myObjStr);

          if (json.success == true) {
            btn.setAttribute('class', 'btn btn-success');
            this.UpdateEstado(Codigo);
            //window.alert("Estado del Activo Código:"+" "+Codigo+" "+"modificado de forma exitosa");
          }
        });;
      }

    }
  }
  onSubmit3() {
    this.submitted3 = true;
    let btn = document.getElementById('asig_btn');
    let Codigo = this.formAsig.get('CodigoaAsig').value;
    let Cedula = this.formAsig.get('CedulaAsig').value;
    let DetalleUbi = this.formAsig.get('DetalleU').value;

    // stop here if form is invalid
    if (this.formAsig.invalid) {
      btn.setAttribute('class', 'btn btn-danger');
      return;
    }
    else {
      this.restApi.getIdEmpleado(Cedula).subscribe((res) => {
        const myObjStr = JSON.stringify(res)
        const json = JSON.parse(myObjStr);
        if (json.success == true) {
          window.alert("El usuario código:" + " " + Cedula + "," + " " + "no pertenece a esta sede");
          btn.setAttribute('class', 'btn btn-danger');
        }
        else {
          this.restApi.getSedeXEmpleado(json.data[0].IdEmpleado).subscribe((res) => {
            const myObjStr = JSON.stringify(res)
            const json = JSON.parse(myObjStr);
            if (json.data[0].IdSede == localStorage.getItem('IdSede')) {
              this.restApi.setAssignActivo(Codigo, Cedula, DetalleUbi).subscribe((res) => {
                const myObjStr = JSON.stringify(res)
                const json = JSON.parse(myObjStr);
                if (json.data == true) {
                  btn.setAttribute('class', 'btn btn-success');
                }
              });;

            }
            else {
              window.alert("El usuario código:" + " " + Cedula + "," + " " + "no pertenece a esta sede");
              btn.setAttribute('class', 'btn btn-danger');
            }
          });
        }
      });;
    }
  }
  EstadoDropdown() {
    let option;
    let dropdown2 = document.getElementById('estado3-Dropdown');
    let defaulOption;
    defaulOption = document.createElement('option');
    defaulOption.text = "Seleccione un Estado";
    defaulOption.value = null;
    dropdown2.append(defaulOption);
    this.restApi.getEstados().subscribe((res) => {
      const myObjStr = JSON.stringify(res)
      const json = JSON.parse(myObjStr);
      var count = Object.keys(json.data).length;
      for (var _i = 3; _i < count; _i++) {
        option = document.createElement('option');
        option.text = json.data[_i].Nombre;
        option.value = json.data[_i].IdEstado;
        dropdown2.append(option);
      }
    });;
  }
  MonedasDropdown() {
    let option;
    let dropdown = document.getElementById('moneda-Dropdown');
    this.restApi.getMonedas().subscribe((res) => {
      const myObjStr = JSON.stringify(res)
      const json = JSON.parse(myObjStr);
      var count = Object.keys(json.data).length;
      for (var _i = 0; _i < count; _i++) {
        option = document.createElement('option');
        option.text = json.data[_i].Nombre;
        option.value = json.data[_i].IdMoneda;
        dropdown.append(option);
      }
    });;
  }
  CategoriaDropdown() {
    let option;
    let dropdown = document.getElementById('categoria-Dropdown');
    let dropdown2 = document.getElementById('categoria2-Dropdown');
    let dropdown3 = document.getElementById('categoria3-Dropdown');
    this.restApi.getCategorias().subscribe((res) => {
      const myObjStr = JSON.stringify(res)
      const json = JSON.parse(myObjStr);
      var count = Object.keys(json.data).length;
      for (var _i = 0; _i < count; _i++) {
        option = document.createElement('option');
        option.text = json.data[_i].Nombre;
        option.value = json.data[_i].IdCategoria;
        dropdown.append(option);
      }
      for (var _i = 0; _i < count; _i++) {
        option = document.createElement('option');
        option.text = json.data[_i].Nombre;
        option.value = json.data[_i].IdCategoria;
        dropdown2.append(option);
      }
      for (var _i = 0; _i < count; _i++) {
        option = document.createElement('option');
        option.text = json.data[_i].Nombre;
        option.value = json.data[_i].IdCategoria;
        dropdown3.append(option);
      }
    });;
  }
  CodigoDropDown_Modif_State(idCategoria) {
    let btn = document.getElementById('modifstate_btn');
    btn.setAttribute('class', 'btn btn-primary');
    $("#codigo_modif_state-Dropdown").empty(); //jquery clear dropdown
    let dropdown = document.getElementById('codigo_modif_state-Dropdown');
    let defaulOption;
    defaulOption = document.createElement('option');
    defaulOption.text = "Seleccione un Código";
    defaulOption.value = null;
    dropdown.append(defaulOption);
    let idEmpleado: number = parseInt(localStorage.getItem('IdEmpleado'));
    this.restApi.getSedeXEmpleado(idEmpleado).subscribe((res) => {
      const myObjStr = JSON.stringify(res)
      const json = JSON.parse(myObjStr);
      let IdSede = json.data[0].IdSede;
      this.restApi.getCodigoXCategoria_admin(idCategoria, IdSede).subscribe((res) => {
        const myObjStr = JSON.stringify(res)
        const json = JSON.parse(myObjStr);
        var count = Object.keys(json.data).length;
        let option;
        for (var _i = 0; _i < count; _i++) {
          let option;
          option = document.createElement('option');
          option.text = json.data[_i].Codigo;
          dropdown.append(option);
        }
      });;

    });

  }
  EstadoDropDown_Modif_State(Codigo) {
    let btn = document.getElementById('modifstate_btn');
    btn.setAttribute('class', 'btn btn-primary');
    $("#estado3-Dropdown").empty(); //jquery clear dropdown
    let option;
    let dropdown = document.getElementById('estado3-Dropdown');
    this.restApi.getEstadoXCodigo(Codigo).subscribe((res) => {
      const myObjStr = JSON.stringify(res)
      const json = JSON.parse(myObjStr);
      var count = Object.keys(json.data).length;
      for (var _i = 0; _i < count; _i++) {
        option = document.createElement('option');
        option.text = "Estado Actual:" + " " + json.data[_i].Nombre;
        option.value = json.data[_i].IdEstado;
        dropdown.append(option);
      }
    });;
    this.EstadoDropdown();
  }
  estadoXCodigo() {
    let btn = document.getElementById('modifstate_btn');
    btn.setAttribute('class', 'btn btn-primary');
  }

  UpdateEstado(Codigo) {
    $("#estado3-Dropdown").empty(); //jquery clear dropdown
    let option;
    let dropdown = document.getElementById('estado3-Dropdown');
    this.restApi.getEstadoXCodigo(Codigo).subscribe((res) => {
      const myObjStr = JSON.stringify(res)
      const json = JSON.parse(myObjStr);
      var count = Object.keys(json.data).length;
      for (var _i = 0; _i < count; _i++) {
        option = document.createElement('option');
        option.text = "Estado Actual:" + " " + json.data[_i].Nombre;
        option.value = json.data[_i].IdEstado;
        dropdown.append(option);
      }
    });;
    this.EstadoDropdown();
  }



  modificar_estado_activo(Codigo, IdEstado) {
    console.log("IdEstado" + IdEstado);
    let btn = document.getElementById('modifstate_btn');
    if (Codigo == "" || IdEstado == "") {
      btn.setAttribute('class', 'btn btn-danger');
      window.alert("No ha sido posible modificar estado del Activo Código:" + " " + Codigo + "\n" + "Error: Estado:" + " " + IdEstado + "\n" + "Revise los datos");
    }
    else {

    }
  }
  //-----------ASIGNAR ACTIVO------------------
  asignar_activo(Codigo, Cedula, DetalleUbi) {
    this.restApi.setAssignActivo(Codigo, Cedula, DetalleUbi).subscribe((res) => { });

  }
  AccionDropDown() {
    //$("#accion-Dropdown").empty(); //jquery clear dropdown
    $("#codigo2-Dropdown").empty(); //jquery clear dropdown
    let dropdown1 = document.getElementById('codigo2-Dropdown');
    let option1;
    let option2;
    let dropdown = document.getElementById('accion-Dropdown');
    option1 = document.createElement('option');
    option2 = document.createElement('option');
    option1.text = "Asignar";
    option1.value = 4;
    dropdown.append(option1);
    option2.text = "Re-Asignar";
    option2.value = 3;
    dropdown.append(option2);
  }
  CodigoDropDown_Asig(idAccion, idCategoria) {
    $("#codigo2-Dropdown").empty(); //jquery clear dropdown
    let dropdown = document.getElementById('codigo2-Dropdown');
    let defaulOption;
    defaulOption = document.createElement('option');
    defaulOption.text = "--Codigo--";
    defaulOption.value = 0;
    dropdown.append(defaulOption);
    let idEmpleado: number = parseInt(localStorage.getItem('IdEmpleado'));
    this.restApi.getSedeXEmpleado(idEmpleado).subscribe((res) => {
      const myObjStr = JSON.stringify(res)
      const json = JSON.parse(myObjStr);
      let IdSede = json.data[0].IdSede;
      this.restApi.getCodigoDynamic_admin(idAccion, idCategoria, IdSede).subscribe((res) => {
        const myObjStr = JSON.stringify(res)
        const json = JSON.parse(myObjStr);
        var count = Object.keys(json.data).length;
        for (var _i = 0; _i < count; _i++) {
          let option;
          option = document.createElement('option');
          option
          option.text = json.data[_i].Codigo;
          dropdown.append(option);
        }
      });;
    });;
  }
}
