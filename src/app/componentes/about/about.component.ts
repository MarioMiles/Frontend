import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  nombre: string
  apellidos: string
  constructor(private irHacia:Router) { }

  ngOnInit(): void {
  }
  llevame():void{
    this.irHacia.navigate(["/hola/" + this.nombre + "/" + this.apellidos])
  }
}
