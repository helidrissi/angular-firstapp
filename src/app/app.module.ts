import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { AppComponent }  from './app.component';
import { BorderCardDirective } from './border-card.directive';
import {PokemonTypeColorPipe} from './pokemon-type-color.pipe';
import{AppRoutingModule} from './app.routing.module';
import {DetailPokemonComponent} from './detail-pokemon.componement';
import{ListPokemonComponent} from './list.pokemon.component';
  
@NgModule({
  imports:      [ BrowserModule,AppRoutingModule ],
  declarations: [ AppComponent,BorderCardDirective,PokemonTypeColorPipe ,DetailPokemonComponent,ListPokemonComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }