import { Component, } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {

  //brincando de aumnetar e diminuir
  valorDoInput!: string;
  numero:number = 10

  aumentar(){
    this.numero += 1
  }

  diminuir(){
    this.numero -= 1
  }

  //alterar a class4

  classToApply: string = 'cinza';
  classes: string[] =['cinza','vermelho','roxo']
  NumeroArray: number = 0

  alterarClass(){

    if(this.NumeroArray != 2){
      this.NumeroArray += 1
    }else{
      this.NumeroArray = 0
    }
   
    this.classToApply = this.classes[this.NumeroArray]
  }

  //Desaparece a o botao alterar

  alteracao:boolean = true
  informacao:string = 'Aparecendo'

  FuncaoAlterar(){
    this.alteracao = !this.alteracao
    if(this.alteracao == true){
      this.informacao = 'Aparecendo'
    }else{
      this.informacao = 'Desapareceu'
    }
  }


}
