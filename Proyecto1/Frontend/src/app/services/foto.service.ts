import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { urls } from '../config/constants'

@Injectable()

export class FotoService {

  constructor(private http : HttpClient) { }

  public uploadFile(photo : File){
    const url = urls.urlbase+'storage/put';
    let photoFormData = new FormData();
    photoFormData.append('fileUploaded', photo,photo.name)
    console.log("Uploading file " + photo.name);
    return this.http.post<any>(url, photoFormData);//, this.headers );
  }

  public downloadFile(hash : string){
    const url = urls.urlbase+"storage/pull/" + hash;
    return url;
  }
}
