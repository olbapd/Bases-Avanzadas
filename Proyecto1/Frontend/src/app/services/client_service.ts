import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { urls } from '../config/constants';
import { HttpParams } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})

export class RestApiService {

  // Define API
  apiURL = urls.urlbase;

  constructor(private http: HttpClient) {

  }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getCalculos(idCategoria) {
    let body = {
      "typesIn": ["int"],
      "typesOut": [],
      "parameters": ["IdCategoria"],
      "values": [idCategoria],
      "ouputs": [],
      "name": "sp_calculos"
    }
      ;
    return this.http.post(this.apiURL + urls.sp_url + 'calculos', body).pipe(retry(1), catchError(this.handleError));
  }

  getCalculosXSede(idCategoria, idSede) {
    let body = {
      "typesIn": ["int", "int"],
      "typesOut": [],
      "parameters": ["IdCategoria", "IdSede"],
      "values": [idCategoria, idSede],
      "ouputs": [],
      "name": "[sp_calculosBySede]"
    }
      ;
    return this.http.post(this.apiURL + urls.sp_url + 'sp_calculosBySede', body).pipe(retry(1), catchError(this.handleError));
  }


  getSate(username, password) {

    let body = {
      "email": username,
      "pass": password
    }

    return this.http.post(this.apiURL + urls.auth_url, body).pipe(retry(1), catchError(this.handleError));
  }
  getSedes() {
    let body = {
      "typesIn": [],
      "typesOut": [],
      "parameters": [],
      "values": [],
      "ouputs": [],
      "name": "getSede"
    }
      ;
    return this.http.post(this.apiURL + urls.sp_url + 'getSedes', body).pipe(retry(1), catchError(this.handleError));
  }

  getAdminSedes() {
    let body = {
      "typesIn": [],
      "typesOut": [],
      "parameters": [],
      "values": [],
      "ouputs": [],
      "name": "sp_getAdministrators"
    }
      ;
    return this.http.post(this.apiURL + urls.sp_url + 'getAdminSedes', body).pipe(retry(1), catchError(this.handleError));
  }

  getActivoXSede(idSede) {
    let body = {
      "typesIn": ["int"],
      "typesOut": [],
      "parameters": ["IdSede"],
      "values": [idSede],
      "ouputs": [],
      "name": "sp_getAllActivobySede"
    }
      ;
    return this.http.post(this.apiURL + urls.sp_url + 'sp_getAllActivobySede', body).pipe(retry(1), catchError(this.handleError));
  }

  getSedeXEmpleado(idEmpleado) {
    let body = {
      "typesIn": ["int"],
      "typesOut": [],
      "parameters": ["idEmpleado"],
      "values": [idEmpleado],
      "ouputs": [],
      "name": "infoSedeXEmpleado"
    }
      ;
    return this.http.post(this.apiURL + urls.sp_url + 'infoSedeXEmpleado', body).pipe(retry(1), catchError(this.handleError));
  }

  getMonedas() {
    let body = {
      "typesIn": [],
      "typesOut": [],
      "parameters": [],
      "values": [],
      "ouputs": [],
      "name": "getMonedas"
    }
    return this.http.post(this.apiURL + urls.sp_url + 'getMonedas', body).pipe(retry(1), catchError(this.handleError));
  }


  getProvincias() {
    let body = {
      "typesIn": [],
      "typesOut": [],
      "parameters": [],
      "values": [],
      "ouputs": [],
      "name": "getProvincia"
    }
      ;
    return this.http.post(this.apiURL + urls.sp_url + 'getProvincias', body).pipe(retry(1), catchError(this.handleError));
  }

  getEstados() {

    let body = {
      "typesIn": [],
      "typesOut": [],
      "parameters": [],
      "values": [],
      "ouputs": [],
      "name": "getEstado"
    }
    return this.http.post(this.apiURL + urls.sp_url + 'getEstado', body).pipe(retry(1), catchError(this.handleError));
  }

  getCategorias() {
    let body = {
      "typesIn": [],
      "typesOut": [],
      "parameters": [],
      "values": [],
      "ouputs": [],
      "name": "getCategoria"
    };
    return this.http.post(this.apiURL + urls.sp_url + 'getCategoria', body).pipe(retry(1), catchError(this.handleError));
  }

  getProvincia() {
    let body = {
      "typesIn": [],
      "typesOut": [],
      "parameters": [],
      "values": [],
      "ouputs": [],
      "name": "getProvincia"
    }
    return this.http.post(this.apiURL + urls.sp_url + 'getProvincia', body).pipe(retry(1), catchError(this.handleError));
  }

  getDistritos(IdCanton) {
    let body = {
      "typesIn": ["int"],
      "typesOut": [],
      "parameters": ["IdCanton"],
      "values": [IdCanton],
      "ouputs": [],
      "name": "getDistrito"
    }
    return this.http.post(this.apiURL + urls.sp_url + 'getDistrito', body).pipe(retry(1), catchError(this.handleError));
  }

  getCanton(IdProvincia) {
    let body = {
      "typesIn": ["int"],
      "typesOut": [],
      "parameters": ["IdProvincia"],
      "values": [IdProvincia],
      "ouputs": [],
      "name": "getCanton"
    }
    return this.http.post(this.apiURL + urls.sp_url + 'getCanton', body).pipe(retry(1), catchError(this.handleError));
  }
  getDepartamento() {
    let body = {
      "typesIn": [],
      "typesOut": [],
      "parameters": [],
      "values": [],
      "ouputs": [],
      "name": "getDepartamento"
    }
    return this.http.post(this.apiURL + urls.sp_url + 'getDepartamento', body).pipe(retry(1), catchError(this.handleError));
  }
  getPuesto() {
    let body = {
      "typesIn": [],
      "typesOut": [],
      "parameters": [],
      "values": [],
      "ouputs": [],
      "name": "getPuesto"
    }
    return this.http.post(this.apiURL + urls.sp_url + 'getPuesto', body).pipe(retry(1), catchError(this.handleError));
  }

  getCodigoDynamic(idEstado, idCategoria) {
    let body = {
      "typesIn": ["int", "int"],
      "typesOut": [],
      "parameters": ["IdEstado", "idCategoria"],
      "values": [idEstado, idCategoria],
      "ouputs": [],
      "name": "getActivoLi"
    }
    return this.http.post(this.apiURL + urls.sp_url + 'getCodigoDynamic', body).pipe(retry(1), catchError(this.handleError));
  }

  getCodigoDynamic_admin(idEstado, idCategoria, IdSede) {
    let body = {
      "typesIn": ["int", "int", "int"],
      "typesOut": [],
      "parameters": ["IdEstado", "idCategoria", "IdSede"],
      "values": [idEstado, idCategoria, IdSede],
      "ouputs": [],
      "name": "sp_getActivoLi"
    }
    return this.http.post(this.apiURL + urls.sp_url + 'getCodigoDynamic', body).pipe(retry(1), catchError(this.handleError));
  }


  getActivoStateBySede(IdEstado, IdSede) {
    let body = {
      "typesIn": ["int", "int"],
      "typesOut": [],
      "parameters": ["IdEstado", "IdSede"],
      "values": [IdEstado, IdSede],
      "ouputs": [],
      "name": "getActivoStateBySede"
    }

    return this.http.post(this.apiURL + urls.sp_url + 'getActivoStateBySede', body).pipe(retry(1), catchError(this.handleError));
  }

  getActivoXCodigo(Codigo) {
    let body = {
      "typesIn": ["varchar"],
      "typesOut": [],
      "parameters": ["Codigo"],
      "values": [Codigo],
      "ouputs": [],
      "name": "getActivo"
    }

    return this.http.post(this.apiURL + urls.sp_url + 'getActivoXCodigo', body).pipe(retry(1), catchError(this.handleError));
  }

  getCodigoXCategoria(idCategoria) {
    let body = {
      "typesIn": ["int"],
      "typesOut": [],
      "parameters": ["idCategoria"],
      "values": [idCategoria],
      "ouputs": [],
      "name": "getActivoCat"
    }

    return this.http.post(this.apiURL + urls.sp_url + 'getActivoXCat', body).pipe(retry(1), catchError(this.handleError));
  }

  getCodigoXCategoria_admin(idCategoria, idSede) {
    let body = {
      "typesIn": ["int", "int"],
      "typesOut": [],
      "parameters": ["IdCategoria", "IdSede"],
      "values": [idCategoria, idSede],
      "ouputs": [],
      "name": "sp_getActivoByCategory"
    }

    return this.http.post(this.apiURL + urls.sp_url + 'getActivoXCat', body).pipe(retry(1), catchError(this.handleError));
  }

  getEstadoXCodigo(Codigo) {
    let body = {
      "typesIn": ["varchar"],
      "typesOut": [],
      "parameters": ["Codigo"],
      "values": [Codigo],
      "ouputs": [],
      "name": "getActivoEst"
    }

    return this.http.post(this.apiURL + urls.sp_url + 'getEstadoXCodigo', body).pipe(retry(1), catchError(this.handleError));
  }
  getEmpleadosXSede(idSede) {
    let body = {
      "typesIn": ["int"],
      "typesOut": [],
      "parameters": ["IdSede"],
      "values": [idSede],
      "ouputs": [],
      "name": "getEmpleadoXSede"
    }
    return this.http.post(this.apiURL + urls.sp_url + 'getEmpleadoXSede', body).pipe(retry(1), catchError(this.handleError));
  }

  getEmpleados() {
    let body = {
      "typesIn": [],
      "typesOut": [],
      "parameters": [],
      "values": [],
      "ouputs": [],
      "name": "getEmpleados"
    }
    return this.http.post(this.apiURL + urls.sp_url + 'getEmpleados', body).pipe(retry(1), catchError(this.handleError));
  }
  getIdEmpleado(Cedula) {
    let body = {
      "typesIn": ["varchar"],
      "typesOut": [],
      "parameters": ["Cedula"],
      "values": [Cedula],
      "ouputs": [],
      "name": "getIdEmpleado"
    }
    return this.http.post(this.apiURL + urls.sp_url + 'getIdEmpleado', body).pipe(retry(1), catchError(this.handleError));
  }
  getIdDepartamento(Nombre) {
    let body = {
      "typesIn": ["varchar"],
      "typesOut": [],
      "parameters": ["NombreD"],
      "values": [Nombre],
      "ouputs": [],
      "name": "getIdDepartamento"
    }
    return this.http.post(this.apiURL + urls.sp_url + 'getIdDepartamento', body).pipe(retry(1), catchError(this.handleError));
  }

  getIdPuesto(Nombre) {
    let body = {
      "typesIn": ["varchar"],
      "typesOut": [],
      "parameters": ["NombreP"],
      "values": [Nombre],
      "ouputs": [],
      "name": "getIdPuesto"
    }
    return this.http.post(this.apiURL + urls.sp_url + 'getIdPuesto', body).pipe(retry(1), catchError(this.handleError));
  }

  getIdSede(Nombre) {
    let body = {
      "typesIn": ["varchar"],
      "typesOut": [],
      "parameters": ["NombreS"],
      "values": [Nombre],
      "ouputs": [],
      "name": "getIdSede"
    }
    return this.http.post(this.apiURL + urls.sp_url + 'getIdSede', body).pipe(retry(1), catchError(this.handleError));
  }

  getQuitarActivo(Codigo, IdEstado) {
    let body = {
      "typesIn": ["varchar", "int"],
      "typesOut": [],
      "parameters": ["Codigo", "IdEstado"],
      "values": [Codigo, IdEstado],
      "ouputs": [],
      "name": "quitarActivo"
    }

    return this.http.post(this.apiURL + urls.sp_url + 'quitarActivo', body).pipe(retry(1), catchError(this.handleError));
  }

  getCambiarEstadoActivo(Codigo, IdEstado) {
    let body = {
      "typesIn": ["varchar", "int"],
      "typesOut": [],
      "parameters": ["Codigo", "IdEstado"],
      "values": [Codigo, IdEstado],
      "ouputs": [],
      "name": "cambiarEstadoActivo"
    }

    return this.http.post(this.apiURL + urls.sp_url + 'quitarActivo', body).pipe(retry(1), catchError(this.handleError));
  }



  quitarEmpleado(Cedula) {
    let body = {
      "typesIn": ["varchar"],
      "typesOut": [],
      "parameters": ["Cedula"],
      "values": [Cedula],
      "ouputs": [],
      "name": "desEmpleado"
    }
    return this.http.post(this.apiURL + urls.sp_url + 'desEmpleado', body).pipe(retry(1), catchError(this.handleError));
  }

  quitarSede(idSede) {
    let body = {
      "typesIn": ["int"],
      "typesOut": [],
      "parameters": ["IdSede"],
      "values": [idSede],
      "ouputs": [],
      "name": "cerrarSede"
    }
    return this.http.post(this.apiURL + urls.sp_url + 'cerrarSede', body).pipe(retry(1), catchError(this.handleError));
  }

  updateAdminSede(cedulaV, cedulaN, IdSede, FechaS, FechaIn) {

    let body = {
      "typesIn": ["varchar", "varchar", "date", "date", "int"],
      "typesOut": [],
      "parameters": ["IdAdminV", "IdAdminN", "FechaSalida", "FechaIngreso", "IdSede"],
      "values": [cedulaV, cedulaN, FechaS, FechaIn, IdSede],
      "ouputs": [],
      "name": "updateAdmin"
    }
    return this.http.post(this.apiURL + urls.sp_url + 'updateAdmin', body).pipe(retry(1), catchError(this.handleError));


  }

  setAssignActivo(Codigo, Cedula, DetalleUbi) {

    let body = {
      "codigo": Codigo,
      "cedula": Cedula,
      "idEstado": 3,
      "detalleUbi": DetalleUbi
    }
    return this.http.post(this.apiURL + urls.activo_url, body).pipe(retry(1), catchError(this.handleError));

  }

  setSede(Nombre, Ubicacion, IdDistrito, IdEstado) {
    let body = {
      "typesIn": ["varchar", "varchar", "int", "int"],
      "typesOut": [],
      "parameters": ["NombreS", "Ubicacion", "IdDistrito", "IdEstado"],
      "values": [Nombre, Ubicacion, IdDistrito, IdEstado],
      "ouputs": [],
      "name": "setSede"
    }
    return this.http.post(this.apiURL + urls.sp_url + 'setSede', body).pipe(retry(1), catchError(this.handleError));

  }
  setEmpleado(Nombre, Apellido1, Apellido2, Cedula, FechaN, Correo, Contrasena, IdDepartamento, IdPuesto, Foto, IdSede, FechaActual) {
    let body = {
      "typesIn": ["varchar", "varchar", "varchar", "varchar", "date", "date", "varchar", "varchar", "int", "int", "int", "varchar"],
      "typesOut": [],
      "parameters": ["Nombre", "Apellido1", "Apellido2", "Cedula", "FechaN", "FechaActual", "Correo", "Contrasena", "IdDepartamento", "IdPuesto", "IdSede", "Foto"],
      "values": [Nombre, Apellido1, Apellido2, Cedula, FechaN, FechaActual, Correo, Contrasena, IdDepartamento, IdPuesto, IdSede, Foto],
      "ouputs": [],
      "name": "setEmpleado"
    }
    return this.http.post(this.apiURL + urls.sp_url + 'setEmpleado', body).pipe(retry(1), catchError(this.handleError));
  }

  setActivo(codigo, nombre, descripcion, foto, precio_compre, tiempo_garantia, vida_util, depreciacion, fecha_compra, FechaR, centro_costo, valor_residual, categoria, moneda, idsede) {
    let body = {
      "typesIn": ["varchar", "varchar", "varchar", "varchar", "int", "int", "int", "float", "date", "date", "int", "int", "int", "int", "int", "int"],
      "typesOut": [],
      "parameters": ["Codigo", "Nombre", "Descripcion", "Foto", "Precio", "TiempoGar", "VidaU", "PorcentajeD", "FechaCompra", "FechaAsig", "CentroCosto", "ValorResidual", "IdCategoria", "IdMoneda", "IdEstado", "IdSede"],
      "values": [codigo, nombre, descripcion, foto, precio_compre, tiempo_garantia, vida_util, depreciacion, fecha_compra, FechaR, centro_costo, valor_residual, categoria, moneda, '4', idsede],
      "ouputs": [],
      "name": "setActivo"
    }
    return this.http.post(this.apiURL + urls.sp_url + 'setActivo', body).pipe(retry(1), catchError(this.handleError));
  }
  //AGREGAR VENTANA PARA ESTAS CONSULTAS---------------
  setCategoria(Nombre, Tangible) {
    let body = {
      "typesIn": ["varchar", "bit"],
      "typesOut": [],
      "parameters": ["NombreC", "Tangible"],
      "values": [Nombre, Tangible],
      "ouputs": [],
      "name": "setCategoria"
    }
    return this.http.post(this.apiURL + urls.sp_url + 'setCategoria', body).pipe(retry(1), catchError(this.handleError));
  }

  setDepartamento(Nombre) {
    let body = {
      "typesIn": ["varchar"],
      "typesOut": [],
      "parameters": ["NombreD"],
      "values": [Nombre],
      "ouputs": [],
      "name": "setDepartamento"
    }
    return this.http.post(this.apiURL + urls.sp_url + 'setDepartamento', body).pipe(retry(1), catchError(this.handleError));
  }

  setEstado(Nombre) {
    let body = {
      "typesIn": ["varchar"],
      "typesOut": [],
      "parameters": ["NombreE"],
      "values": [Nombre],
      "ouputs": [],
      "name": "setEstado"
    }
    return this.http.post(this.apiURL + urls.sp_url + 'setEstado', body).pipe(retry(1), catchError(this.handleError));
  }

  setMoneda(Nombre) {
    let body = {
      "typesIn": ["varchar"],
      "typesOut": [],
      "parameters": ["NombreM"],
      "values": [Nombre],
      "ouputs": [],
      "name": "setMoneda"
    }
    return this.http.post(this.apiURL + urls.sp_url + 'setMoneda', body).pipe(retry(1), catchError(this.handleError));
  }
  setPuesto(Nombre) {
    let body = {
      "typesIn": ["varchar"],
      "typesOut": [],
      "parameters": ["NombreP"],
      "values": [Nombre],
      "ouputs": [],
      "name": "setPuesto"
    }
    return this.http.post(this.apiURL + urls.sp_url + 'setPuesto', body).pipe(retry(1), catchError(this.handleError));
  }

  updateEmpleadoInfo(Cedula, Correo, Contrasena, Foto) {
    let body = {
      "typesIn": ["varchar", "varchar", "varchar", "varchar"],
      "typesOut": [],
      "parameters": ["Cedula", "Correo", "Contrasena", "Foto"],
      "values": [Cedula, Correo, Contrasena, Foto],
      "ouputs": [],
      "name": "updateEmpleadoInfo"
    }
    return this.http.post(this.apiURL + urls.sp_url + 'updateEmpleadoInfo', body).pipe(retry(1), catchError(this.handleError));
  }
  cambioEmpleado(Cedula, IdDepartamento, IdPuesto, IdSede, FechaS, FechaIn) {
    let body = {
      "typesIn": ["varchar", "int", "int", "int", "date", "date"],
      "typesOut": [],
      "parameters": ["Cedula", "IdDepartamento", "IdSede", "IdPuesto", "FechaSalida", "FechaIngreso"],
      "values": [Cedula, IdDepartamento, IdSede, IdPuesto, FechaS, FechaIn],
      "ouputs": [],
      "name": "cambioEmpleado"
    }
    return this.http.post(this.apiURL + urls.sp_url + 'cambioEmpleado', body).pipe(retry(1), catchError(this.handleError));
  }


//--------------REPORT-------ADMIN-----------------//
//--------------------REPORTE#1------------------------------//

getAllActivoAsignXSede(IdSede) {
  let body = {
    "typesIn": ["int"],
    "typesOut": [],
    "parameters": ["IdSede"],
    "values": [IdSede],
    "ouputs": [],
    "name": "getAllActivoAsignXSede"
  }
  return this.http.post(this.apiURL + urls.sp_url + 'getAllActivoAsignXSede', body).pipe(retry(1), catchError(this.handleError));
}

getAllCostoInicialXSede(IdSede) {
  let body = {
    "typesIn": ["int"],
    "typesOut": [],
    "parameters": ["IdSede"],
    "values": [IdSede],
    "ouputs": [],
    "name": "getAllCostoInicialXSede"
  }
  return this.http.post(this.apiURL + urls.sp_url + 'getAllCostoInicialXSede', body).pipe(retry(1), catchError(this.handleError));
}
getAllValorResidualXSede(IdSede) {
  let body = {
    "typesIn": ["int"],
    "typesOut": [],
    "parameters": ["IdSede"],
    "values": [IdSede],
    "ouputs": [],
    "name": "getAllValorResidualXSede"
  }
  return this.http.post(this.apiURL + urls.sp_url + 'getAllValorResidualXSede', body).pipe(retry(1), catchError(this.handleError));
}
getAllValorActivoActualXSede(IdSede) {
  let body = {
    "typesIn": ["int"],
    "typesOut": [],
    "parameters": ["IdSede"],
    "values": [IdSede],
    "ouputs": [],
    "name": "getAllValorActivoActualXSede"
  }
  return this.http.post(this.apiURL + urls.sp_url + 'getAllValorActivoActualXSede', body).pipe(retry(1), catchError(this.handleError));
}
//--------------------------------------------REPORTE#2-------------------------------------------------------------
getActivoAsignEmpleado(IdEmpleado) {
  let body = {
    "typesIn": ["int"],
    "typesOut": [],
    "parameters": ["IdEmpleado"],
    "values": [IdEmpleado],
    "ouputs": [],
    "name": "getActivoAsignEmpleado"
  }
  return this.http.post(this.apiURL + urls.sp_url + 'getActivoAsignEmpleado', body).pipe(retry(1), catchError(this.handleError));
}

getAllCostoInicialXEmpleado(IdEmpleado) {
  let body = {
    "typesIn": ["int"],
    "typesOut": [],
    "parameters": ["IdEmpleado"],
    "values": [IdEmpleado],
    "ouputs": [],
    "name": "getAllCostoInicialXEmpleado"
  }
  return this.http.post(this.apiURL + urls.sp_url + 'getAllCostoInicialXEmpleado', body).pipe(retry(1), catchError(this.handleError));
}

getAllCostoInicialXEmpleadoProm(IdEmpleado) {
  let body = {
    "typesIn": ["int"],
    "typesOut": [],
    "parameters": ["IdEmpleado"],
    "values": [IdEmpleado],
    "ouputs": [],
    "name": "getAllCostoInicialXEmpleadoProm"
  }
  return this.http.post(this.apiURL + urls.sp_url + 'getAllCostoInicialXEmpleadoProm', body).pipe(retry(1), catchError(this.handleError));
}

getAllValorResidualXEmpleado(IdEmpleado) {
  let body = {
    "typesIn": ["int"],
    "typesOut": [],
    "parameters": ["IdEmpleado"],
    "values": [IdEmpleado],
    "ouputs": [],
    "name": "getAllValorResidualXEmpleado"
  }
  return this.http.post(this.apiURL + urls.sp_url + 'getAllValorResidualXEmpleado', body).pipe(retry(1), catchError(this.handleError));
}
getAllValorResidualXEmpleadoProm(IdEmpleado) {
  let body = {
    "typesIn": ["int"],
    "typesOut": [],
    "parameters": ["IdEmpleado"],
    "values": [IdEmpleado],
    "ouputs": [],
    "name": "getAllValorResidualXEmpleadoProm"
  }
  return this.http.post(this.apiURL + urls.sp_url + 'getAllValorResidualXEmpleadoProm', body).pipe(retry(1), catchError(this.handleError));
}
getAllValorActivoActualXEmpleado(IdEmpleado) {
  let body = {
    "typesIn": ["int"],
    "typesOut": [],
    "parameters": ["IdEmpleado"],
    "values": [IdEmpleado],
    "ouputs": [],
    "name": "getAllValorActivoActualXEmpleado"
  }
  return this.http.post(this.apiURL + urls.sp_url + 'getAllValorActivoActualXEmpleado', body).pipe(retry(1), catchError(this.handleError));
}

getAllValorActivoActualXEmpleadoProm(IdEmpleado) {
  let body = {
    "typesIn": ["int"],
    "typesOut": [],
    "parameters": ["IdEmpleado"],
    "values": [IdEmpleado],
    "ouputs": [],
    "name": "getAllValorActivoActualXEmpleadoProm"
  }
  return this.http.post(this.apiURL + urls.sp_url + 'getAllValorActivoActualXEmpleadoProm', body).pipe(retry(1), catchError(this.handleError));
}
//---------------------------------------------REPORTE#3---------------------------------------------------------
getAllDetalleActivoAsignXSede(IdSede,Ano,VidaUtil) {
  let body = {
    "typesIn": ["int","int","int"],
    "typesOut": [],
    "parameters": ["IdSede","Ano","VidaUtil"],
    "values": [IdSede,Ano,VidaUtil],
    "ouputs": [],
    "name": "getAllDetalleActivoAsignXSede"
  }
  return this.http.post(this.apiURL + urls.sp_url + 'getAllDetalleActivoAsignXSede', body).pipe(retry(1), catchError(this.handleError));
}


  // Error handling 
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}