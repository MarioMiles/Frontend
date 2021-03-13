import { Component, OnDestroy, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  variable: string= "texto de prueba"
  num1: number = null
  usuarios = [
    {nombre: "Manolo", apellido: "López"},
    {nombre: "Rocío", apellido: "García"},
    {nombre: "Filomena", apellido: "Borrasca"}
  ]
  usuarios2: Usuario[] =[
    {nombre: "Manolo", apellido: "López"},
    {nombre: "Rocío", apellido: "García"},
    {nombre: "Filomena", apellido: "Borrasca"}
  ]
  usuarioSel
  usuario3: Usuario = new Usuario("Fernandez", "Mario")
  selUser(entrada):void{
    this.usuarioSel=entrada
  }

  constructor() { }

  ngOnInit(): void {
  }
  ngOnDestroy(): void{
    console.log("Bye")
  }
}
