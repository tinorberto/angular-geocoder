import { Component } from '@angular/core';
import {Http, Response} from '@angular/http'; 
import {Observable} from 'rxjs/Rx';
import {OnInit} from '@angular/core';
import 'rxjs/add/operator/map'
import {GeocoderService} from './app.service.geocoder'

@Component({
  selector: 'app-geocoder',
  templateUrl: './app.component.geocoder.html',
})

export class GeocoderComponet implements OnInit {
  cep = '';
  msgEndereco = '';
  endereco = ''
  resposta = '...'
  msgCep ='';
  enderecos : any
  respostaServico =''    
  
  
  constructor(private geocoderService : GeocoderService){  
  }

  /*
  Evento criado quando a aplicao e incializada
  */
  ngOnInit() {
    console.log('Eu estou aqui');
  }

  /*
  Enviar os dados 
  */
  enviar(){    
     //console.log(this.geocoderService.getGeocoder(this.endereco , this.cep).subscribe(val => console.log(val)) ) 
    this.geocoderService.getGeocoder(this.endereco , this.cep).subscribe(val =>  
    {
      console.log(val)
      if(val.endereco instanceof Array ){
        this.enderecos = val.endereco
      }else{
      this.respostaServico = 'Nenhum endereço encontrado'
    }
    })
    /*
    this.geocoderService.getGeocoder(this.endereco , this.cep).subscribe(
    function (val){
        this.enderecos = val.endereco;
        console.log(val.endereco[0])
    })*/
  }
}
