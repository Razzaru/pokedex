import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PokedexService} from "../services/pokedex.service";

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  activePokemon;

  constructor(private _pokedexService:PokedexService, private _route:ActivatedRoute) {
  }

  ngOnInit() {
    this._route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this._pokedexService.getPokemonById(id)
          .subscribe(pokemon => {
            this.activePokemon = pokemon;
            console.log(this.activePokemon)
          })
      })
  }

}
