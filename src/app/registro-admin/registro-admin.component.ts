import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/servicios/user.service';
import { dniValido, telefonoValido } from 'src/app/validaciones/validaciones';
import { User } from 'src/app/clases/user';

@Component({
  selector: 'app-registro-admin',
  templateUrl: './registro-admin.component.html',
  styleUrls: ['./registro-admin.component.css']
})
export class RegistroAdminComponent implements OnInit {

  perfil: User = {}
  formRegister= this.fb.group({
    nombre:[''],
    apellidos:[''],
    password:['', [Validators.required, Validators.minLength(4)]],
    password2:['', [Validators.required]],
    email:['', [Validators.required, Validators.email]],
    telefono:[undefined,[telefonoValido()]],
    dni:['', [Validators.required, dniValido()]],
    rol:['']
  })
  
  constructor(private fb:UntypedFormBuilder, private servicioUsuario:UserService, private irHacia:Router) { }

  ngOnInit(): void {
  
  }
  
submit(): void{
  if (this.formRegister.value.password == this.formRegister.value.password2){
    this.servicioUsuario.registrarAdmin(this.formRegister.value).subscribe(
      respuesta =>{
        console.log(respuesta)
        this.servicioUsuario.guardarToken(respuesta)
        this.irHacia.navigate(['/perfil'])
      },
      error => console.log(error)
    )
  }
  else alert('Las contraseñas no coinciden')
}
}
