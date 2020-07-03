import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pokemon } from './Pokemons';
import { POKEMONS } from './mock-pockemons';
import {PokemonsService} from './pokemons.service'
  
@Component({
    selector: 'detail-pokemon',
    templateUrl: './app/pokemons/detail-pokemon.component.html',
  
})
export class DetailPokemonComponent implements OnInit {
  
    pokemon: Pokemon = null;
  
    constructor(private route: ActivatedRoute, private router: Router,private pokemonservice:PokemonsService ) {}
  
    ngOnInit(): void {
        
  
        let id = +this.route.snapshot.paramMap.get('id');
        this.pokemonservice.getPokemon(id)
        .subscribe(pokemon=>this.pokemon=pokemon);
        
    }

    deletePokemon(p:Pokemon):void{

       this.pokemonservice.deletePokemon(p)
       .subscribe(_=>this.goBack());

    }
  
    goBack(): void {
        this.router.navigate(['/pokemon/all']);
    }

    goEdit(po:Pokemon): void {
        let link=['pokemon/edit',po.id]
        this.router.navigate(link);
    }
  
}