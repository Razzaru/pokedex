import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {PokedexService} from "./services/pokedex.service";
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { CapitalizePipe } from './capitalize.pipe';
import {routing} from "./app.routing";
import { GenerationComponent } from './generation/generation.component';
import { GenerationsListComponent } from './generations-list/generations-list.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TypesListComponent } from './types-list/types-list.component';
import { TypeDetailsComponent } from './type-details/type-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonDetailsComponent,
    CapitalizePipe,
    GenerationComponent,
    GenerationsListComponent,
    SidebarComponent,
    TypesListComponent,
    TypeDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [PokedexService],
  bootstrap: [AppComponent]
})
export class AppModule { }
