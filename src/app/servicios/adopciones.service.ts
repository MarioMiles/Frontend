import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Mascota } from  '../clases/mascota';
import { User } from '../clases/user';
import { Adopcion } from '../clases/adopcion';
const url = 'http://localhost/backendphp/mascotas/'
@Injectable({
  providedIn: 'root'
})
export class AdopcionesService {

  constructor(private http:HttpClient) { }
  insertarAdopcion(adopcion:Adopcion): Observable<any>{
    return this.http.post(url, adopcion)
  }
}
