import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Mascota } from  '../clases/mascota';
import { User } from '../clases/user';
import { Adopcion } from '../clases/adopcion';
const url = 'https://backrefugiovirtual.herokuapp.com//'
@Injectable({
  providedIn: 'root'
})
export class AdopcionesService {

  constructor(private http:HttpClient) { }
 
  comenzarAdopcion(id:number):Observable<any>{
    console.log(url+id)
    return this.http.post(url+'confirmar/', id)
    
  }
  borrarAdopcion(id:number):Observable<any>{
    return this.http.delete(url+'confirmar/'+ id)
  }
}
