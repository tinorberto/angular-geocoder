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

  constructor(private geocoderService : GeocoderService){
      
  }

  ngOnInit() {
    console.log('Eu estou aqui');
  }

    enviar(){
      
     console.log(this.geocoderService.getGeocoder(this.endereco , this.cep).subscribe(val => console.log(val)) ) 
     this.geocoderService.getGeocoder(this.endereco , this.cep).subscribe(val =>  this.resposta +=val.endereco)

      console.log(this.resposta);
  }
}
