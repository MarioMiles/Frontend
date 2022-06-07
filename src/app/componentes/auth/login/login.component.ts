import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/servicios/user.service';
import { User } from 'src/app/clases/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin= this.fb.group({
    password:['', [Validators.required]],
    email:['', [Validators.required, Validators.email]],
    rol:['']
  })
  mensaje: string=''
  data: Object = {};
  constructor(private fb:UntypedFormBuilder, private servicioUsuario:UserService, private irHacia:Router) { }

  ngOnInit(): void {
      if (this.servicioUsuario.isLogged()){
        this.irHacia.navigate(['/perfil'])
      }
  }
  submit(): void{
   
    this.servicioUsuario.acceso(this.formLogin.value).subscribe(
      respuesta => {
        console.log(respuesta)
        if((this.formLogin.get('email').value)=="ad@ad.ad" && (this.formLogin.get('password').value=="admin")){
          this.servicioUsuario.guardarToken(respuesta)
          
          console.log('ADMINNNN')
        this.irHacia.navigate(['/panelAdmin'])
        location.reload()
     
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
  eliminarUsuario(): void{
    this.servicioUsuario.eliminarUsuario().subscribe(
      respuesta => {
        console.log(respuesta)
        
        
      },
      error => console.log(error)
    )
  }
 
}
