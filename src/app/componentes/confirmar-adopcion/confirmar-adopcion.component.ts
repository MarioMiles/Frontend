import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Mascota } from 'src/app/clases/mascota';
import { User } from 'src/app/clases/user';
import { AdopcionesService } from 'src/app/servicios/adopciones.service';
import { MascotasService } from 'src/app/servicios/mascotas.service';
import { UserService } from 'src/app/servicios/user.service';
@Component({
  selector: 'app-confirmar-adopcion',
  templateUrl: './confirmar-adopcion.component.html',
  styleUrls: ['./confirmar-adopcion.component.css']
})
export class ConfirmarAdopcionComponent implements OnInit {
mascota:Mascota = {}
  constructor(private servicioUsuario:UserService, private servicioMascotas: MascotasService, private irHacia:Router, private fb:UntypedFormBuilder, private servicioAdopciones:AdopcionesService) { }

  ngOnInit(): void {
    
  }
  comenzarAdopcion(id:number){
    this.servicioMascotas.comenzarAdopcion(id).subscribe
    console.log(id)
    respuesta =>{
      console.log(respuesta)
      this.mascota=respuesta; 
        
     }
  
  }
}
