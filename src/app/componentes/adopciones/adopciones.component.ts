import { Component, OnInit } from '@angular/core';
import {  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Mascota } from 'src/app/clases/mascota';
import { User } from 'src/app/clases/user';
import { MascotasService } from 'src/app/servicios/mascotas.service';
import { UserService } from 'src/app/servicios/user.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-adopciones',
  templateUrl: './adopciones.component.html',
  styleUrls: ['./adopciones.component.css']
})
export class AdopcionesComponent implements OnInit {
  mascota: Mascota[]=[];
  formMascota= this.fb.group({
    nombre:[''],
    tipoAni:[''],
    peso:[''],
    foto:['']
    
  })
  
  formImagen = this.fb.group({
    foto: ['', Validators.required],
    id:['']
    
  })
 
  

  
  constructor(private servicioMascotas: MascotasService, private irHacia:Router, private fb:FormBuilder,) { }


  ngOnInit(): void {
    
    this.obtenerMascotas();
    
  }
  foto: File 
  mostrarEditar: boolean = false
  'responseType': 'text'
  cargarMascota(): void{
    
    this.servicioMascotas.insertarMascota(this.formMascota.value).subscribe(
     
      respuesta => {
        
        console.log(respuesta)
        this.irHacia.navigate(["/adopciones"]);
        
        
      },
      error => console.log(error)
    )
    
  }

obtenerMascotas():void{
  this.servicioMascotas.obtenerMascota().subscribe(
    respuesta=>{
      console.log(respuesta);
      this.mascota=respuesta;
      
    }, error=>console.log(error)
    
  )
}

subirImagen():void{
  const formData = new FormData()
  formData.append('foto', this.formImagen.get('foto').value)
  this.servicioMascotas.subirImagen(formData).subscribe(
    respuesta=> {
      console.log(respuesta)
      
    },
      error=>{console.log(error)}
      
      
  )
}
cambiaImagen(evento):void{
  if(evento.target.files){
    this.formImagen.get('foto').setValue(evento.target.files[0])
  }
}
subirFoto(): void{
  const formData = new FormData()
  formData.append('foto', this.foto)
  this.servicioMascotas.subirImagen(formData).subscribe(
    respuesta=> {
      console.log(respuesta)
      
    },
      error=>{console.log(error)}
      
      
  )

}
editarMascota(): void{
  this.servicioMascotas.editarMascota(this.formMascota.value).subscribe(
    respuesta => {
      console.log(respuesta)
      this.cargarMascota()
      this.mostrarEditar = false
    },
    error => console.log(error)
  )
}
eliminarMascota(id:number): void{
  console.log(id)
  this.servicioMascotas.eliminarMascota(id).subscribe(
    respuesta => {console.log(respuesta)
    this.formMascota.reset()
    this.obtenerMascotas()
    },
    error => {console.log(error)}
  )
}
}