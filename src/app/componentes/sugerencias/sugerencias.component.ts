import { Component, OnInit } from '@angular/core';
import { SugerenciasService } from 'src/app/servicios/sugerencias.service';
import { Sugerencia } from 'src/app/clases/sugerencia';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sugerencias',
  templateUrl: './sugerencias.component.html',
  styleUrls: ['./sugerencias.component.css']
})
export class SugerenciasComponent implements OnInit {
  id:number
  mensaje:string = ''
  formSugerencia= this.fb.group({
    asunto:[''],
    mensaje:[''],
    idUsu:['']
  })
  sugerencia:Sugerencia
  constructor(private servicioSugerencias:SugerenciasService, private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  insertarSugerencia():void{
    this.servicioSugerencias.insertarSugerencia(this.formSugerencia.value).subscribe(
      respuesta=>{
        this.sugerencia=respuesta;
        console.log(respuesta)
        
        this.mensaje=respuesta;
        this.formSugerencia.reset();
       
      }
    )

    
  }
 

}
