import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../clases/note';
import { Sugerencia } from '../clases/sugerencia';

const url = 'http://mariomiles.web23.ovh/sugerencias/'

@Injectable({
  providedIn: 'root'
})
export class SugerenciasService {

  constructor(private http:HttpClient) { }
  listarSugerencias():Observable<any>{
    
    return this.http.get(url)
    
  }
  insertarSugerencia(sugerencia:Sugerencia):Observable<any>{
    return this.http.post(url, sugerencia)
  }
  eliminarSugerencia(id:number):Observable<any>{
    return this.http.delete(url+id)
  }
}
