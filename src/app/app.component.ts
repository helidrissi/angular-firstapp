import { Component } from '@angular/core';
import {Pokemon} from './Pokemons'
import  { OnInit } from '@angular/core'

import{POKEMONS} from './mock-pockemons'
@Component({
  selector: 'first-app',
  templateUrl: `./app/app.componement.html`
})
export class AppComponent implements OnInit

{ 


private title:string ="Voici Les Pokémons";
private pokemons:Pokemon[];

ngOnInit(){

  this.pokemons=POKEMONS;
}


selectPokemon(poki:Pokemon){

  alert('vous avez choisi '+poki.name)


}


}