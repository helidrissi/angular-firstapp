import { Injectable } from '@angular/core';
import { Pokemon } from './Pokemons';
import { POKEMONS } from './mock-pockemons';
  
@Injectable()
export class PokemonsService {
  
    // Retourne tous les pokémons
    getPokemons(): Pokemon[] {
      return POKEMONS;
    }

    getPokemonTypes(): string[]{

      return ['Plante','Feu','Eau','Electric','isecte','Poison','Fée','Normal','Vol'];
    }
      
    // Retourne le pokémon avec l'identifiant passé en paramètre
    getPokemon(id: number): Pokemon {
      let pokemons = this.getPokemons();
      
      for(let index = 0; index < pokemons.length; index++) {
        if(id === pokemons[index].id) {
          return pokemons[index];
        }
      }
    }
}