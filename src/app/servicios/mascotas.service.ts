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
  subirImagen(id:number, entrada):Observable<any>{
    console.log(id)
   return this.http.post(url+'image/'+id, entrada)
   
  // return this.http.post(url+'image/', entrada);
  
  }
  

  leerNota(id:number): Observable<any>{
    return this.http.get(url+id)
  }

  editarMascota(id:number): Observable<any>{
    return this.http.put(url,id)
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