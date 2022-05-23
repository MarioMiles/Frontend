import { Component, OnInit } from '@angular/core';
import {  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Mascota } from 'src/app/clases/mascota';
import { User } from 'src/app/clases/user';
import { MascotasService } from 'src/app/servicios/mascotas.service';
import { UserService } from 'src/app/servicios/user.service';
import { FormBuilder } from '@angular/forms';
import { identifierName } from '@angular/compiler';


@Component({
  selector: 'app-adopciones',
  templateUrl: './adopciones.component.html',
  styleUrls: ['./adopciones.component.css']
})
export class AdopcionesComponent implements OnInit {
  perfil: User = {}
  mascota: Mascota[]=[];
  masc: Mascota = {}
  
  mascotaSel: Mascota
  formMascota= this.fb.group({
    nombre:[''],
    tipoAni:[''],
    peso:[''],
    foto:['']
  })
  formMascota2= this.fb.group({
    id:[''],
    nombre:[''],
    tipoAni:[''],
    peso:['']
  })
  
  formImagen = this.fb.group({
    foto: [''],
    id:['']
    
  })
  formTipo= this.fb.group({
    tipoAni:[''],
    
    
    
  })
 
  

  fnLogged = this.servicioUsuario.isLogged
  constructor(private servicioUsuario:UserService, private servicioMascotas: MascotasService, private irHacia:Router, private fb:FormBuilder,) { }
  
  

  ngOnInit(): void {
    //this.obtenerMascotas();
    
    this.misMascotas(this.perfil.id);
    
  }
 
  mensaje: string=''
  tipoAni:string
  id:number
  foto: File 
  mostrarEditar: boolean = false
  'responseType': 'text'
  cargarMascota(): void{
    
    this.servicioMascotas.obtenerMascota().subscribe(
     
      respuesta => {
        
        console.log(respuesta)
        this.mascota = respuesta
        this.formMascota2.patchValue(respuesta)
        
        
        
      },
      error => {
        console.log(error)
        this.mensaje=error.error.error
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


cambiaImagen(evento):void{
  if(evento.target.files){
    this.formImagen.get('imagen').setValue(evento.target.files[0])
  } error => {
    console.log(error)
    this.mensaje=error.error.error
  }
}


tengoFoto(evento): void{
  if(evento.target.files){
    this.foto=evento.target.files[0]
  }
}
subirFoto(id:number): void{
  const formData = new FormData()
  formData.append('imagen', this.foto)
  this.servicioMascotas.subirImagen(id, formData).subscribe(
    respuesta=> {
      console.log(respuesta)
      this.mensaje=respuesta
      location.reload()
      
      
      
    },
    error => {
      console.log(error)
      this.mensaje=error.error.error
      window.scrollTo(0, 0)
    }
      
      
  )

}
editarMascota(id:number): void{
  console.log(id);
  const formData = new FormData()
  this.formMascota2.controls['id'].setValue(id);
  
  //const { id } = this.formMascota2.value
  console.log(formData.append('id', this.formMascota2.get('id').value))
  console.log(this.formMascota2.value)
  
  
  this.servicioMascotas.editarMascota(this.formMascota2.value).subscribe(
    respuesta => {
      
      console.log(respuesta)
      this.cargarMascota()
      this.mostrarEditar = false
      location.reload()
    },
    error => {
      console.log(error)
      this.mensaje=error.error.error
      window.scrollTo(0, 0)
    }
  )
}
/*editarMascota(id:number): void{
  console.log(id)
 console.log(this.formMascota2.value)
  this.servicioMascotas.editarMascota(this.formMascota2.value).subscribe(
    respuesta => {
      
      
      this.mostrarEditar = false
      
      this.cargarMascota
      
    },
    error => console.log(error)
  )
}*/
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
misMascotas(idUsu:number){
  this.servicioMascotas.misMascotas(idUsu).subscribe(
    respuesta =>{
      console.log(respuesta)
      this.mascota=respuesta; 
        
     }
  )
}
comenzarAdopcion(id:number){
  this.servicioMascotas.comenzarAdopcion(id).subscribe
  console.log(id)
  respuesta =>{
    console.log(respuesta)
    this.mascota=respuesta; 
      
   }

}
confirmar(id:number, nombre:string, tipoAni:string) {
  if(confirm("Estás a punto de adoptar a la mascota con id: "+id+".Nombre: "+nombre+ ". Tipo de Animal: "+tipoAni)) {
    this.comenzarAdopcion(id)
  }
}
filtrarPorTipo(tipoAni:String):void{
  this.formTipo.controls['tipoAni'].setValue(tipoAni);
  this.servicioMascotas.filtrarPorTipo(this.formTipo.value).subscribe(
    respuesta=>{
      console.log(tipoAni);
      this.mascota=respuesta;
    }
  )
}
}