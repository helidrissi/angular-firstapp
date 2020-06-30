import { Component, OnInit } from '@angular/core';
import { Pokemon } from './Pokemons';
import { POKEMONS } from './mock-pockemons';
import { Router } from '@angular/router';
import {PokemonsService} from './pokemons.service';
  
@Component({
    selector: 'list-pokemon',
    templateUrl: './app/pokemons/list-pokemon.component.html'
  
})
export class ListPokemonComponent implements OnInit {
  
    pokemons: Pokemon[] = null;
  
    constructor(private router: Router,private pokemonservice:PokemonsService) { }
  
    ngOnInit(): void {
        this.pokemons = this.pokemonservice.getPokemons();
    }
  
    selectPokemon(pokemon: Pokemon): void {
        console.log('Vous avez selectionné ' + pokemon.name);
        let link = ['/pokemon', pokemon.id];
        this.router.navigate(link);
    }
  
}