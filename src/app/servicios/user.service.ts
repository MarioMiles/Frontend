import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { accesoUsuario, User } from '../clases/user';
import { Usuario } from '../clases/usuario';
const url = 'https://backrefugiovirtual.herokuapp.com/user/'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  
  registrar(usuario: User): Observable<any>{
    return this.http.post(url, usuario)
  }
  

  acceso (usuario: accesoUsuario): Observable<any>{
    return this.http.post(url+'login/', usuario)
  }

  obtenerPerfil(): Observable<any>{
    return this.http.get(url)
  }

  editarPerfil(usuario:User): Observable<any>{
    return this.http.put(url, usuario)
  }

  eliminarUsuario(): Observable<any>{
    return this.http.delete(url)
  }
  eliminarUser(id:number):Observable<any>{
    return this.http.delete(url+"id/"+id)
  }

  subirImagen(entrada):Observable<any>{
    return this.http.post(url+'image/', entrada)
  }
  listarUsuarios():Observable<any>{
    return this.http.get(url+'list/')
  }
  comprobarRol():Observable<any>{
    return this.http.get(url+"rol/")
  }

  guardarToken(token:string): void{
    localStorage.setItem('userToken', token)
  }
  adminToken(token:string): void{
    localStorage.setItem('adminToken', token)
  }
  adminIsLogged(): boolean{
    return !!localStorage.getItem('adminToken')
  }

  isLogged(): boolean{
    return !!localStorage.getItem('userToken')
  }

  logOut(): void{
    localStorage.removeItem('userToken')
  }

  leerToken(): string{
    return localStorage.getItem('userToken')
  }
  leerTokenAd(): string{
    return localStorage.getItem('adminToken')
  }
  darAdmin(id:number):Observable<any>{
    return this.http.put(url+"admin/"+ id, id)
  }
  quitarAdmin(id:number):Observable<any>{
    return this.http.put(url+"user/"+ id, id)
  }
  comprobarUsuarioPorId(id:number):Observable<any>{
    return this.http.get(url+"id/"+id)
  }
  
}
