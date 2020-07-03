import { Injectable } from '@angular/core';
import {  Pokemon } from './Pokemons';
import { POKEMONS } from './mock-pockemons';
import { ActivatedRoute, Router, Params } from '@angular/router';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError,map,tap} from 'rxjs/operators'; 
import {of} from 'rxjs';

@Injectable()
export class PokemonsService {
  

  constructor(private http:HttpClient,private router:Router){}
  private pokemonsUrl='api/pokemon/all';


  private log(log:string){

    console.info(log);
  }

  private handleError<T>(operation='operation',result?: T){
     return (error:any)=>{
      console.log(error);
      console.log(`${operation} failed: ${error.message}`);

      return of (result as T);


     }

  }
    // Retourne tous les pokémons
    getPokemons(): Observable<Pokemon[]> {
      return this.http.get<Pokemon[]>(this.pokemonsUrl).pipe(
      tap(_=>this.log('fetched pokemon')),
      catchError(this.handleError('getPokemons',[]))
    );
    }

    getPokemonTypes(): string[]{

      return ['Plante','Feu','Eau','Electric','isecte','Poison','Fée','Normal','Vol'];
    }

    updatePokemon(p: Pokemon) :Observable<Pokemon>{
       const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})
        };
        return this.http.put<Pokemon>(this.pokemonsUrl,p,httpOptions).pipe(
          tap(_=>this.log(`update pokemon id=${p.id}`)),
          catchError(this.handleError<any>(`updatedPokemon`)));

    }
    deletePokemon(p: Pokemon) :Observable<Pokemon>{
      const url=`${this.pokemonsUrl}/${p.id}`;
      const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})
       };
       return this.http.delete<Pokemon>(url,httpOptions).pipe(
         tap(_=>this.log(`deleted pokemon id=${p.id}`)),
         catchError(this.handleError<Pokemon>(`deleted pokemon`)));

   }

     goBack(): void {
        this.router.navigate(['/pokemons']);
    }
      
    // Retourne le pokémon avec l'identifiant passé en paramètre
    getPokemon(id: number): Observable<Pokemon> {
            const url=`${this.pokemonsUrl}/${id}`;
            return this.http.get<Pokemon>(url).pipe(
              tap(_=>this.log(`fetched pokemon id=${id}`)),
              catchError(this.handleError<Pokemon>(`getPokemons id=${id}`))
            );
      
        }

    searchPokemon(term:string): Observable<Pokemon[]> {
          if(!term.trim()){
return of ([]);

         }

         return this.http.get<Pokemon[]>(`${this.pokemonsUrl}/?name=${term}`).pipe(
          tap(_=>this.log(`found Pokemon matching "${term}"`)),
          catchError(this.handleError<Pokemon[]>(`'search Pokemon',[]`))
        );


    }
      }
  