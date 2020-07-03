import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { ListPokemonComponent } from './list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import {PokemonRoutingModule} from './pokemons-routing.module';
import {PokemonsService} from './pokemons.service'
import {PokemonFormComponent} from './pokemon-form.component';
import {EditPokemonComponent} from './edit-pokemon.component';
import {FormsModule} from '@angular/forms';
import {PokemonSearchComponent} from './serach-pokemon.componenet';
import {LoaderComponent} from './loader.component';
import {AuthGuard} from '../auth-guard.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PokemonRoutingModule
    ],
    declarations: [
        ListPokemonComponent,
        DetailPokemonComponent,
        BorderCardDirective,
        PokemonTypeColorPipe,
        PokemonSearchComponent,
        EditPokemonComponent,
        LoaderComponent,
        PokemonFormComponent
    ],
    providers: [PokemonsService,AuthGuard]
})
export class PokemonsModule { }