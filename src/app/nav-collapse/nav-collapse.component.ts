import { Component, OnInit } from '@angular/core';
import {PokedexService} from "../services/pokedex.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-collapse',
  templateUrl: './nav-collapse.component.html',
  styleUrls: ['./nav-collapse.component.css']
})
export class NavCollapseComponent {

  generations;
  pokemonId: string;

  constructor(private _pokedexService: PokedexService) {
    this._pokedexService.getGens().subscribe(gens => {
      this.generations = gens.results;
      console.log(this.generations);
    })
  }

}
