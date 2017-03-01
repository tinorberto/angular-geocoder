import { Component } from '@angular/core';
import {Http, Response} from '@angular/http'; 
import {Observable} from 'rxjs/Rx';
import {OnInit} from '@angular/core';
import 'rxjs/add/operator/map'

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


  constructor(private http:Http) { }
  // Uses http.get() to load a single JSON file
  getGeocoder() {
    return this.http.get('http://geocoder.pbh.gov.br/geocoder/v1/address?logradouro=afonso pena').map(res => res.json());
  }

  ngOnInit() {
    console.log('Eu estou aqui')

    console.log(this.getGeocoder ());
  }

  enviar(){
    if (this.endereco.length > 3){
      this.msgEndereco = ''
    } else{
      this.msgEndereco = 'O Endereço deve ter 3 digitos'
    }
    
    if (this.cep.length > 3){
      this.msgCep = ''
    } else{
      this.msgCep = 'O Endereço deve ter 3 digitos'
    }

  }
}
