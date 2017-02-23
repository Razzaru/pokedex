import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { GenerationComponent } from "./generation/generation.component";
import {GenerationsListComponent} from "./generations-list/generations-list.component";

const appRoutes: Routes = [
  {
    path: '',
    component: PokemonListComponent
  },
  {
    path: 'pokemon',
    component: PokemonListComponent
  },
  {
    path: 'pokemon/:id',
    component: PokemonDetailsComponent
  },
  {
    path: 'generations',
    component: GenerationsListComponent
  },
  {
    path: 'generations/:id',
    component: GenerationComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
