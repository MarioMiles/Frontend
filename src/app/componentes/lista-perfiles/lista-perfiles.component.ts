import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/servicios/user.service';
import { User } from 'src/app/clases/user';

@Component({
  selector: 'app-lista-perfiles',
  templateUrl: './lista-perfiles.component.html',
  styleUrls: ['./lista-perfiles.component.css']
})
export class ListaPerfilesComponent implements OnInit {
  usuarios: User[]
  usuarioSel: User
  constructor(private servicioUsuario:UserService) { }

  ngOnInit(): void {
    this.obtenerUsuario();
  }
obtenerUsuario(): void{
  this.servicioUsuario.listarUsuarios().subscribe(
    respuesta => {
      console.log(respuesta);
      this.usuarios=respuesta;
    },
    error => {
      console.log(error);
    }
  )
}

}
