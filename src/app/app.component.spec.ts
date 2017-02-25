/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {PokemonListComponent} from "./pokemon-list/pokemon-list.component";
import {PokemonDetailsComponent} from "./pokemon-details/pokemon-details.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {AbilitiesListComponent} from "./abilities-list/abilities-list.component";
import {MoveDetailsComponent} from "./move-details/move-details.component";
import {EncountersComponent} from "./encounters/encounters.component";
import {BrowserModule} from "@angular/platform-browser";
import {TypeDetailsComponent} from "./type-details/type-details.component";
import {TypesListComponent} from "./types-list/types-list.component";
import {GenerationsListComponent} from "./generations-list/generations-list.component";
import {GenerationComponent} from "./generation/generation.component";
import {CapitalizePipe} from "./capitalize.pipe";
import {AbilityDetailsComponent} from "./ability-details/ability-details.component";
import {ItemsListComponent} from "./items-list/items-list.component";
import {BerriesListComponent} from "./berries-list/berries-list.component";
import {MovesListComponent} from "./moves-list/moves-list.component";
import {LoadingComponent} from "./loading/loading.component";
import {ItemDetailsComponent} from "./item-details/item-details.component";
import {BerryDetailsComponent} from "./berry-details/berry-details.component";
import {FormsModule} from "@angular/forms";
import {routing} from "./app.routing";
import {PokedexService} from "./services/pokedex.service";
import {HttpModule} from "@angular/http";

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
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
        BerryDetailsComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
      ],
      providers: [PokedexService],
      bootstrap: [AppComponent]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  
});
