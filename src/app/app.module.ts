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
import { AbilitiesListComponent } from './abilities-list/abilities-list.component';
import { AbilityDetailsComponent } from './ability-details/ability-details.component';
import { LoadingComponent } from './loading/loading.component';
import { MovesListComponent } from './moves-list/moves-list.component';
import { MoveDetailsComponent } from './move-details/move-details.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { EncountersComponent } from './encounters/encounters.component';
import { BerriesListComponent } from './berries-list/berries-list.component';
import { BerryDetailsComponent } from './berry-details/berry-details.component';
import { NavCollapseComponent } from './nav-collapse/nav-collapse.component';

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
    TypeDetailsComponent,
    AbilitiesListComponent,
    AbilityDetailsComponent,
    LoadingComponent,
    MovesListComponent,
    MoveDetailsComponent,
    ItemsListComponent,
    ItemDetailsComponent,
    EncountersComponent,
    BerriesListComponent,
    BerryDetailsComponent,
    NavCollapseComponent
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
