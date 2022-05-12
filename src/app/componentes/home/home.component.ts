import { Component, OnDestroy, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { UserService } from 'src/app/servicios/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/clases/user';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  inputBorrar: string = ''
  formPerfil= this.fb.group({
    nombre:[''],
    apellidos:[''],
    password:[''],
    email:['', [Validators.required, Validators.email]],
    
  })
  perfil: User = {}
  mostrarEditar: boolean = false
  mostrarEliminar: boolean = false
  
  usuarioSel
  usuario3: Usuario = new Usuario("Fernandez", "Mario")
  selUser(entrada):void{
    this.usuarioSel=entrada
  }

  fnLogged = this.servicioUsuario.isLogged
  constructor(private servicioUsuario:UserService, private fb:FormBuilder, private irHacia:Router) { }

  ngOnInit(): void {
    this.cargarPerfil()
  }
cargarPerfil(): void{
  this.servicioUsuario.obtenerPerfil().subscribe(
    respuesta => {
      console.log(respuesta)
      this.perfil = respuesta
      this.formPerfil.patchValue(respuesta)
    },
    error => console.log(error)
  )
}
}
