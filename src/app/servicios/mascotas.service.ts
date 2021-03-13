import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mascota } from  '../clases/mascota';

const url = 'http://localhost/backendphp/mascotas/'
@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  constructor(private http:HttpClient) { }
  

  insertarMascota(mascota:Mascota): Observable<any>{
    return this.http.post(url, mascota)
  }
  obtenerMascota(): Observable<any>{
    return this.http.get(url)
    
  }
  subirImagen( entrada):Observable<any>{
    //return this.http.post(url+'images/'+'?id='+id, entrada)
   return this.http.post(url+'images', entrada);
  }

  leerNota(id:number): Observable<any>{
    return this.http.get(url+id)
  }

  editarMascota(mascota): Observable<any>{
    return this.http.put(url, mascota)
  }

  eliminarMascota(id:number): Observable<any>{
    return this.http.delete(url+id)
  }
  logOut(): void{
    localStorage.removeItem('userToken')
  }

  buscarNotas(entrada:string): Observable<any>{
    return this.http.get(url +'?busqueda='+ entrada)
  }
}