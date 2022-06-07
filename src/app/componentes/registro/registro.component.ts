import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, FormsModule, Validators } from '@angular/forms';
import { dniValido, telefonoValido } from 'src/app/validaciones/validaciones';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  formRegister: UntypedFormGroup = new UntypedFormGroup({
    nombre: new UntypedFormControl('',[Validators.required,Validators.minLength(3)]),
    apellidos: new UntypedFormControl('',[Validators.required]),
    password: new UntypedFormControl('',[Validators.required]),
    email: new UntypedFormControl('',[Validators.required, Validators.email]),
    dni: new UntypedFormControl('',[Validators.required, dniValido()]),
    telefono: new UntypedFormControl(undefined, [Validators.required, telefonoValido()])
  })
  formRegister2 = this.fb.group({
    nombre: ['',[Validators.required,Validators.minLength(3)]],
    apellidos: ['',[Validators.required]],
    password: ['',[Validators.required]],
    email: ['',[Validators.required, Validators.email]],
    dni: ['',[Validators.required, dniValido()]],
    telefono: [undefined, [Validators.required]]
  })

  constructor(private fb: UntypedFormBuilder) { }

  ngOnInit(): void {
  }
  evaluaForm(): void{
    console.log ("Evaluando formulario")
    console.log(this.formRegister.getRawValue())
    if (this.formRegister.valid) console.log ("El formulario es correcto")
    else console.log("Datos incorrectos.")
  }
  get nombre1() {return this.formRegister.get("nombre")}
  get apellidos1() {return this.formRegister.get("apellidos")}
  get password1() {return this.formRegister.get("password")}
  get email1() {return this.formRegister.get("email")}
  get telefono1() {return this.formRegister.get("telefono")}
  get dni1() {return this.formRegister.get("dni")}
}
