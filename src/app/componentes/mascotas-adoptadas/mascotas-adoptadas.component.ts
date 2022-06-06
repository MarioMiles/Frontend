import { Component, OnInit } from '@angular/core';
import {  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Mascota } from 'src/app/clases/mascota';
import { User } from 'src/app/clases/user';
import { MascotasService } from 'src/app/servicios/mascotas.service';
import { UserService } from 'src/app/servicios/user.service';
import { FormBuilder } from '@angular/forms';
import { identifierName } from '@angular/compiler';
import { AdopcionesService } from 'src/app/servicios/adopciones.service'
@Component({
  selector: 'app-mascotas-adoptadas',
  templateUrl: './mascotas-adoptadas.component.html',
  styleUrls: ['./mascotas-adoptadas.component.css']
})
export class MascotasAdoptadasComponent implements OnInit {
  perfil: User = {}
  mascota: Mascota[]=[];
  masc:Mascota={}

  constructor(private servicioUsuario:UserService, private servicioAdopciones:AdopcionesService, private servicioMascotas: MascotasService, private irHacia:Router, private fb:FormBuilder ) { }

  ngOnInit(): void {
    this.obtenerAdoptadas()
  }
  obtenerAdoptadas():void{
    this.servicioMascotas.obtenerAdoptadas().subscribe(
      respuesta=>{
        console.log(respuesta)
        this.mascota=respuesta;
      }
    )
  }
  cancelarAdopcion(id:number):void{
    console.log(id)
    this.servicioMascotas.cancelarAdopcion(id).subscribe(
      respuesta=>{
        this.masc=respuesta
        console.log(respuesta)
      }
    )
  }

}
