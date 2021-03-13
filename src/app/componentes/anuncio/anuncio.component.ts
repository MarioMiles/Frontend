import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/clases/user';
import { MascotasService } from 'src/app/servicios/mascotas.service';
import { UserService } from 'src/app/servicios/user.service';
import { telefonoValido } from 'src/app/validaciones/validaciones';
import { Mascota } from 'src/app/clases/mascota';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css']
})
export class AnuncioComponent implements OnInit {
  mascota: Mascota={};
  
  formMascota= this.fb.group({
    nombre:[''],
    tipoAni:[''],
    peso:[''],
    foto:['']
    
  })
  formImagen = this.fb.group({
    imagen: ['', Validators.required],
    id:['']
    
  })
  constructor(private servicioMascota: MascotasService, private fb:FormBuilder, private irHacia:Router, private servicioUsuario: UserService) { }


  ngOnInit(): void {
  }
  foto:File;
  tengoFoto(evento): void{
    if(evento.target.files){
      this.foto=evento.target.files[0]
    }
  }
  cargarMascota(): void{
    
    this.servicioMascota.insertarMascota(this.formMascota.value).subscribe(
     
      respuesta => {
        
        console.log(respuesta)
        this.irHacia.navigate(["/adopciones"]);
        
      },
      error => console.log(error)
    )
  }
  subirImagen():void{
    const formData = new FormData()
    formData.append('imagen', this.formImagen.get('imagen').value)
    this.servicioMascota.subirImagen(formData).subscribe(
      respuesta=> {
        console.log(respuesta)
        
      },
        error=>{console.log(error)}
        
        
    )
  }
  cambiaImagen(evento):void{
    if(evento.target.files){
      this.formImagen.get('imagen').setValue(evento.target.files[0])
    }
  }
  subirFoto(): void{
    const formData = new FormData()
    formData.append('imagen', this.foto)
    this.servicioMascota.subirImagen(formData).subscribe(
      respuesta=> {
        console.log(respuesta)
        
      },
        error=>{console.log(error)}
        
        
    )
  
  }
  editarMascota(): void{
    this.servicioUsuario.editarPerfil(this.formMascota.value).subscribe(
      respuesta => {
        console.log(respuesta)
        this.cargarMascota()
        //this.mostrarEditar = false
      },
      error => console.log(error)
    )
  }
}
