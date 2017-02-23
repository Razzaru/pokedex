import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class PokedexService {

  constructor(private _http: Http) { }

  getTwentyPokemon(offset: number) {
    return this._http.get('http://pokeapi.co/api/v2/pokemon/?offset='+offset).map(res => res.json());
  }

  getByUrl(url: string) {
    return this._http.get(url).map(res => res.json());
  }

  getSingleGen(generation: number) {
    return this._http.get('http://pokeapi.co/api/v2/generation/'+generation).map(res => res.json());
  }

  getBerryById(id: number) {
    return this._http.get('http://pokeapi.co/api/v2/berry/'+id).map(res => res.json());
  }

  getGens() {
    return this._http.get('http://pokeapi.co/api/v2/generation/').map(res => res.json());
  }
  
  getPokemonById(id: number) {
    return this._http.get('http://pokeapi.co/api/v2/pokemon/'+id).map(res => res.json());
  }

}
