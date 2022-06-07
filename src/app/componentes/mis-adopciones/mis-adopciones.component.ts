
import { Component, OnInit } from '@angular/core';
import {  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Mascota } from 'src/app/clases/mascota';
import { User } from 'src/app/clases/user';
import { MascotasService } from 'src/app/servicios/mascotas.service';
import { UserService } from 'src/app/servicios/user.service';
import { UntypedFormBuilder } from '@angular/forms';
import { AdopcionesService } from 'src/app/servicios/adopciones.service'
import { stringify } from 'querystring';

@Component({
  selector: 'app-mis-adopciones',
  templateUrl: './mis-adopciones.component.html',
  styleUrls: ['./mis-adopciones.component.css']
})
export class MisAdopcionesComponent implements OnInit {
  fnLogged = this.servicioUsuario.isLogged
  adminLogged = this.servicioUsuario.adminIsLogged
  constructor(private servicioUsuario:UserService, private servicioMascotas: MascotasService, private irHacia:Router, private fb:UntypedFormBuilder,private servicioAdopciones:AdopcionesService) { }
  formTipo= this.fb.group({
    tipoAni:''
    
    
    
  })
 
  mensaje:string;
  perfil: User = {}
  mascota: Mascota[]=[];
  mascotaFiltrada: Mascota[]=[];

  mascotaSel: Mascota;
  ngOnInit(): void {
    this.obtenerMascotas()
    this.cargarPerfil()
    
    //this.misMascotas(this.perfil.id)
  }
  
  misMascotas(idUsu:number){
    this.servicioMascotas.misMascotas(idUsu).subscribe(
      respuesta =>{
        console.log(respuesta)
        this.mascota=respuesta; 
          
       }
    )
  }
  /*filtrarPorTipo(tipoAni:String):void{
    this.formTipo.controls['tipoAni'].setValue(tipoAni);
    this.servicioMascotas.filtrarPorTipo(this.formTipo.value).subscribe(
      respuesta=>{
        console.log(tipoAni);
        this.mascota=respuesta;
      }
    )
  }*/
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
      location.reload();
      console.log(respuesta)
      this.mascota=respuesta; 
      this.mensaje=respuesta
      
        
     }, error => {
      console.log(error)
      this.mensaje=error.error.error
    }
    )
  }
  confirmar(id:number, nombre:string, tipoAni:string) {
    if(confirm("Estás a punto de adoptar a "+nombre+ ". Tipo de Animal: "+tipoAni+" ¿Quieres confirmar la adopción?")) {
      this.comenzarAdopcion(id)
    }
  }
  cargarPerfil(): void{
    this.servicioUsuario.obtenerPerfil().subscribe(
      respuesta => {
        console.log(respuesta)
        this.perfil = respuesta
       
      },
      error => console.log(error)
    )
  }
  isAdmin():void{
    this.servicioUsuario.comprobarRol().subscribe(
      respuesta => {
        console.log(respuesta)
        
      },
      error => console.log(error)
    )
  }
  filtrar(tipoAni:string):void{
    const formData = new FormData()
  this.formTipo.controls['tipoAni'].setValue(tipoAni);
console.log(tipoAni)
    this.servicioMascotas.filtrarPorTipo(tipoAni).subscribe(
     
      respuesta => {
        console.log(respuesta)
        this.mascotaFiltrada=respuesta;
      }
    )
  }
  eliminarMascota(id:number): void{
    console.log(id)
    this.servicioMascotas.eliminarMascota(id).subscribe(
      respuesta => {console.log(respuesta)
    
      location.reload()
      },
      error => {console.log(error)}
    )
  }
 
  }
  

