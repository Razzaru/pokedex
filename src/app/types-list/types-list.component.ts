import { Component, OnInit } from '@angular/core';
import {PokedexService} from "../services/pokedex.service";

@Component({
  selector: 'app-types-list',
  templateUrl: './types-list.component.html',
  styleUrls: ['./types-list.component.css']
})
export class TypesListComponent implements OnInit {

  types;
  count;

  constructor(private _pokedexService: PokedexService) {
    this._pokedexService.getTypes().subscribe(types => {
      this.types = types.results;
      this.count = types.count;
      console.log(this.types);
      console.log(this.count);
    });
  }

  ngOnInit() {
  }

}
