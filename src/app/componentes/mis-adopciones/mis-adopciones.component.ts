
import { Component, OnInit } from '@angular/core';
import {  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Mascota } from 'src/app/clases/mascota';
import { User } from 'src/app/clases/user';
import { MascotasService } from 'src/app/servicios/mascotas.service';
import { UserService } from 'src/app/servicios/user.service';
import { FormBuilder } from '@angular/forms';
import { AdopcionesService } from 'src/app/servicios/adopciones.service'

@Component({
  selector: 'app-mis-adopciones',
  templateUrl: './mis-adopciones.component.html',
  styleUrls: ['./mis-adopciones.component.css']
})
export class MisAdopcionesComponent implements OnInit {
  fnLogged = this.servicioUsuario.isLogged
  constructor(private servicioUsuario:UserService, private servicioMascotas: MascotasService, private irHacia:Router, private fb:FormBuilder,private servicioAdopciones:AdopcionesService) { }
  mensaje:string;
  perfil: User = {}
  mascota: Mascota[]=[];
  mascotaSel: Mascota;
  ngOnInit(): void {
    this.obtenerMascotas()
  }
  
  misMascotas(idUsu:number){
    this.servicioMascotas.misMascotas(idUsu).subscribe(
      respuesta =>{
        console.log(respuesta)
        this.mascota=respuesta; 
          
       }
    )
  }
  obtenerMascotas():void{
    this.servicioMascotas.obtenerMascota().subscribe(
      respuesta=>{
        console.log(respuesta);
        this.mascota=respuesta;
        
      }, error => {
        console.log(error)
        this.mensaje=error.error.error
      }
      
      
    )
  }
  comenzarAdopcion(id:number){
    this.servicioMascotas.comenzarAdopcion(id).subscribe(
    
    respuesta =>{
      location.reload()
      console.log(respuesta)
      this.mascota=respuesta; 
      
        
     }
    )
  }
  confirmar(id:number, nombre:string, tipoAni:string) {
    if(confirm("Estás a punto de adoptar a la mascota con id: "+id+". Nombre: "+nombre+ ". Tipo de Animal: "+tipoAni)) {
      this.comenzarAdopcion(id)
    }
  }
 
  }
  

