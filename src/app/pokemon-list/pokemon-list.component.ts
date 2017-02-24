import {Component, OnInit} from '@angular/core';
import {PokedexService} from "../services/pokedex.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {

  offset:number = 0;
  pokemonList;
  count:number;
  nextPage:string;
  currentPage:string = 'http://pokeapi.co/api/v2/pokemon/?offset=0';
  pokemonId: string = '';

  constructor(private _pokedexService:PokedexService, private _router: Router) {
    this._pokedexService.getByUrl(this.currentPage).subscribe(pokemons => {
      this.pokemonList = pokemons.results;
      this.count = pokemons.count;
      this.nextPage = pokemons.next
    });
  }

  nextPageNav() {
    this._pokedexService.getByUrl(this.nextPage).subscribe(pokemons => {
      this.pokemonList = pokemons.results;
      this.currentPage = this.nextPage;
      this.nextPage = pokemons.next;
    });
    if ((this.currentPage).length >= 43) {
      this.offset += 20;
    }
  }

  prevPageNav() {
    this._pokedexService.getTwentyPokemon(this.offset).subscribe(pokemons => {
      this.pokemonList = pokemons.results;
      this.nextPage = pokemons.next;
    });
    this.offset -= 20;
  }

  updateId() {
    var tmp = this.pokemonList.filter((item) => {
      return item.name.includes(this.pokemonId.toLowerCase());
    });
    return tmp;
  }

}
