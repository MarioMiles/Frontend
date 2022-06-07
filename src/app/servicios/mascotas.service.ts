import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mascota } from  '../clases/mascota';

const url = 'http://https://backrefugiovirtual.herokuapp.com/mascotas/'
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
    console.log(url+'image/'+id, entrada)
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
  misMascotas(idUsu:number): Observable<any>{
    return this.http.get(url +'misMascotas/'+idUsu)
  }
  comenzarAdopcion(id:number):Observable<any>{
   
    return this.http.post(url+"confirmar/"+ id, id)
  }
  filtrarPorTipo(tipoAni:string):Observable<any>{
   
    return this.http.get(url+"filtrar/"+tipoAni)
  }
  obtenerTodas():Observable<any>{
    return this.http.get(url+'todas/')
  }
  obtenerAdoptadas():Observable<any>{
    return this.http.get(url+"adoptadas/")
  }
  cancelarAdopcion(id:number):Observable<any>{
    return this.http.put(url+"cancelar/",id)
  }
}