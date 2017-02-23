import {Component, OnInit} from '@angular/core';
import {PokedexService} from "../services/pokedex.service";

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

  constructor(private _pokedexService:PokedexService) {
    this._pokedexService.getByUrl(this.currentPage).subscribe(pokemons => {
      this.pokemonList = pokemons.results;
      this.count = pokemons.count;
      this.nextPage = pokemons.next;
      this.addSprites();
    });
  }

  nextPageNav() {
    this._pokedexService.getByUrl(this.nextPage).subscribe(pokemons => {
      this.pokemonList = pokemons.results;
      this.currentPage = this.nextPage;
      this.nextPage = pokemons.next;
      this.addSprites();
    });
    if ((this.currentPage).length >= 43) {
      this.offset += 20;
    }
  }

  prevPageNav() {
    this._pokedexService.getTwentyPokemon(this.offset).subscribe(pokemons => {
      this.pokemonList = pokemons.results;
      this.nextPage = pokemons.next;
      this.addSprites();
    });
    this.offset -= 20;
  }

  addSprites() {
    this.pokemonList.forEach((item, index, array) => {
      this._pokedexService.getByUrl(item.url).subscribe(pokemon => {
        item.spriteUrl = pokemon.sprites.front_default;
        item.types = pokemon.types;
        item.id = pokemon.id;
      });
    });
  }

}
