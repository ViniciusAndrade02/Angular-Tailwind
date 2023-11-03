import { Component, } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {

  valorDoInput!: string;
  numero:number = 10


  aumentar(){
    this.numero += 1
  }

  diminuir(){
    this.numero -= 1
  }
}
