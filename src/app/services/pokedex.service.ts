import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class PokedexService {

  constructor(private _http: Http) { }

  getTwentyPokemon(offset: number) {
    return this._http.get('https://pokeapi.co/api/v2/pokemon/?offset='+offset).map(res => res.json());
  }

  getByUrl(url: string) {
    return this._http.get(url).map(res => res.json());
  }

  getSingleGen(generation: number) {
    return this._http.get('https://pokeapi.co/api/v2/generation/'+generation).map(res => res.json());
  }

  getBerryById(id: number) {
    return this._http.get('https://pokeapi.co/api/v2/berry/'+id).map(res => res.json());
  }

  getGens() {
    return this._http.get('https://pokeapi.co/api/v2/generation/').map(res => res.json());
  }

  getPokemonById(id: number) {
    return this._http.get('https://pokeapi.co/api/v2/pokemon/'+id).map(res => res.json());
  }

  getTypes() {
    return this._http.get('https://pokeapi.co/api/v2/type').map(res => res.json());
  }

  getTypeById(id) {
    return this._http.get('https://pokeapi.co/api/v2/type/'+id).map(res => res.json());
  }

  getAbilities(offset) {
    return this._http.get('https://pokeapi.co/api/v2/ability/?offset='+offset).map(res => res.json());
  }

  getAbilityById(id) {
    return this._http.get('https://pokeapi.co/api/v2/ability/'+id).map(res => res.json());
  }
  
  getItems(offset) {
    return this._http.get('https://pokeapi.co/api/v2/item').map(res => res.json());
  }

  getItemById(id) {
    return this._http.get('https://pokeapi.co/api/v2/item/'+id).map(res => res.json());
  }
  
  getEncounterById(id) {
    return this._http.get('https://pokeapi.co/api/v2/pokemon/'+id+'/encounters').map(res => res.json());
  }

  getMoves(offset) {
    return this._http.get('https://pokeapi.co/api/v2/move/?offset='+offset).map(res => res.json());
  }

  getMoveById(id) {
    return this._http.get('https://pokeapi.co/api/v2/move/'+id).map(res => res.json());
  }

}
