import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import {AutoCompleteService} from 'ionic2-auto-complete';
import { Http } from '@angular/http';
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/map'

@Component({
  selector: 'page-apartamentos',
  templateUrl: 'apartamentos.html',
})
export class ApartamentosPage implements AutoCompleteService {

  labelAttribute = "name";

   constructor(private http:Http) {

   }
   getResults(keyword:string) {
     return this.http.get("https://restcountries.eu/rest/v1/name/"+keyword)
       .map(
         result =>
         {
           return result.json()
             .filter(item => item.name.toLowerCase().startsWith(keyword.toLowerCase()) )
         });
   }
 }
