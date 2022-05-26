import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/servicios/user.service';
import { User } from 'src/app/clases/user';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {
  perfil: User = {}
  estiloActivo: string = "active text-dark sombra"
  fnLogged = this.servicioUsuario.isLogged
  adminLogged = this.servicioUsuario.adminIsLogged
  constructor(private servicioUsuario:UserService, private irHacia:Router) { }

  ngOnInit(): void {
    this.cargarPerfil()
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
  doLogout(): void{
    this.servicioUsuario.logOut()
    this.irHacia.navigate(['/login'])
  }

}
