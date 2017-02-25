import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { GenerationComponent } from "./generation/generation.component";
import {GenerationsListComponent} from "./generations-list/generations-list.component";
import {TypesListComponent} from "./types-list/types-list.component";
import {TypeDetailsComponent} from "./type-details/type-details.component";
import {AbilitiesListComponent} from "./abilities-list/abilities-list.component";
import {AbilityDetailsComponent} from "./ability-details/ability-details.component";
import {MovesListComponent} from "./moves-list/moves-list.component";
import {MoveDetailsComponent} from "./move-details/move-details.component";
import {ItemsListComponent} from "./items-list/items-list.component";
import {ItemDetailsComponent} from "./item-details/item-details.component";
import {EncountersComponent} from "./encounters/encounters.component";
import {BerriesListComponent} from "./berries-list/berries-list.component";
import {BerryDetailsComponent} from "./berry-details/berry-details.component";

const appRoutes: Routes = [
  {
    path: 'pokemon',
    component: PokemonListComponent
  },
  {
    path: 'pokemon/:id',
    component: PokemonDetailsComponent,
  },
  {
    path: 'pokemon/:id/encounters',
    component: EncountersComponent
  },
  {
    path: 'generations',
    component: GenerationsListComponent
  },
  {
    path: 'generations/:id',
    component: GenerationComponent
  },
  {
    path: 'types',
    component: TypesListComponent
  },
  {
    path: 'types/:id',
    component: TypeDetailsComponent
  },
  {
    path: 'abilities',
    component: AbilitiesListComponent
  },
  {
    path: 'abilities/:id',
    component: AbilityDetailsComponent
  },
  {
    path: 'moves',
    component: MovesListComponent
  },
  {
    path: 'moves/:id',
    component: MoveDetailsComponent
  },
  {
    path: 'items',
    component: ItemsListComponent
  },
  {
    path: 'items/:id',
    component: ItemDetailsComponent
  },
  {
    path: 'berries',
    component: BerriesListComponent
  },
  {
    path: 'berries/:id',
    component: BerryDetailsComponent
  },
  {
    path: '',
    redirectTo: '/pokemon',
    pathMatch: 'full'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
