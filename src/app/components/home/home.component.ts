import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nomeProduto: string = 'Curso de Angular';
  anuncio: string = `O ${this.nomeProduto} está em promoção`
  idProdruto: number = 3;
  precoProduto: number = 2.51;
  promocao: boolean = true;
  foto: string = 'assets/img/crud.png'
  dataValidade ="2021-12-31"


  constructor() {
    //Variáveis de string com concatenação
    //this.anuncio = 'O' + this.nomeProduto + 'está em promoção';

    console.log('Nome do Produto: ', this.nomeProduto);
    console.log('Anuncio: ', this.anuncio);
    console.log('ID: ', this.idProdruto);
    console.log('Preço: ', this.precoProduto);
    console.log('Promoção: ', this.promocao);
    /*
    //Escopo das variáveis dentro do código:
    //var variavelVar;
    //let variavelLet;
    //const variavelConst = 1;

    var idadeVar = 10;
    let idadeLet = 15;
    console.log('Minha idade var é:', idadeVar);
    console.log('Minha idade let é:', idadeLet);



    function imprimeIdade(){
      var idadeVar = 20;
      let idadeLet = 25;
      console.log('Minha idade var é: ', idadeVar);
      console.log('Minha idade let é: ', idadeLet);
    }
    imprimeIdade();



    function imprimeIdadeFor(){
      //let idadeLet = 50;
      //for (var idadeVar = 30; idadeVar <= 40; idadeVar ++){
      for (let idadeFor = 30; idadeFor <= 40; idadeFor ++){
        //console.log('Idade dentro do for: ', idadeVar);
        console.log('Idade dentro do for: ', idadeFor);
      }
      //console.log('Idade fora do for: ', idadeVar);
      console.log('Idade fora do for: ', idadeLet);
    }
    imprimeIdadeFor();
    */
  }

  ngOnInit(): void {
  }

}
