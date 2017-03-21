import { Injectable, EventEmitter } from '@angular/core';
import {OnInit} from '@angular/core';
import 'rxjs/add/operator/map'
import {Http, Response} from '@angular/http'; 
import {Observable} from 'rxjs/Rx';


@Injectable() 
export class GeocoderService {
 
    constructor(private http:Http) { }
  
    getGeocoder(logradouro: String , cep: String) {
        var urlGeo = 'http://geocoder.pbh.gov.br/geocoder/v1/address?'
        
        if(logradouro != ''){
            urlGeo = urlGeo + "&logradouro="+logradouro;
        }
        if(cep != ''){
            urlGeo = urlGeo + "&cep="+cep;
        }

        return this.http.get(urlGeo).map(res =>res.json());
     }

  helloService(){
      return "Hello Service";
  }

}   