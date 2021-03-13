import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hola',
  templateUrl: './hola.component.html',
  styleUrls: ['./hola.component.css']
})
export class HolaComponent implements OnInit {
  nombre: string
  apellidos: string
  constructor(private miruta: ActivatedRoute) { }

  ngOnInit(): void {
    this.nombre = this.miruta.snapshot.paramMap.get("nombre")
    this.apellidos = this.miruta.snapshot.paramMap.get("apellidos")
  }

}
