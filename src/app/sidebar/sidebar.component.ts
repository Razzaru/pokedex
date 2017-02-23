import { Component } from '@angular/core';
import {PokedexService} from "../services/pokedex.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  generations;
  pokemonId: string;

  constructor(private _pokedexService: PokedexService, private _router: Router) {
    this._pokedexService.getGens().subscribe(gens => {
      this.generations = gens.results;
      console.log(this.generations);
    })
  }

  updateId() {
    this._router.navigate(['/pokemon/'+this.pokemonId.toLowerCase()])
  }

}
