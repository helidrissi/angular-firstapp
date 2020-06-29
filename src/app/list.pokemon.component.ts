import { Component } from '@angular/core';
import {Pokemon} from './Pokemons';
import  { OnInit } from '@angular/core';
import {Router} from '@angular/router';

import{POKEMONS} from './mock-pockemons'
@Component({
  selector: 'list-pokemon',
  templateUrl: `./app/list.pokemon.component.html`
})
export class ListPokemonComponent implements OnInit

{ 


private title:string ="Voici Les Pokémons";
private pokemons:Pokemon[];
constructor(private router:Router){}

ngOnInit(){

  this.pokemons=POKEMONS;
}


selectPokemon(poki:Pokemon){

  let link=['/pokemon',poki.id];
  this.router.navigate(link);


}


}