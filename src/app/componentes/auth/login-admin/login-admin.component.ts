import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  mensaje: string=''
  formLoginAdmin= this.fb.group({
    password:['', [Validators.required]],
    email:['', [Validators.required, Validators.email]],
    rol:['']
  })
  constructor(private fb:FormBuilder, private servicioUsuario:UserService, private irHacia:Router) { }

  ngOnInit(): void {
    
  }
  submit(): void{
    this.servicioUsuario.acceso(this.formLoginAdmin.value).subscribe(
      respuesta => {
        console.log(respuesta)
        if((this.formLoginAdmin.get('rol').value)=="admin"){
          this.servicioUsuario.adminToken(respuesta)
          this.servicioUsuario.guardarToken(respuesta)
          console.log(respuesta)
        this.irHacia.navigate(['/about'])
     
        }else{
        this.servicioUsuario.guardarToken(respuesta)
        
        this.irHacia.navigate(['/perfil'])
        location.reload();
        }
      },
      error => {
        console.log(error)
        this.mensaje=error.error.error
      }
    )
  }
}