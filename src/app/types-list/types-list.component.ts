import {Component, OnInit} from '@angular/core';
import {PokedexService} from "../services/pokedex.service";

@Component({
  selector: 'app-types-list',
  templateUrl: './types-list.component.html',
  styleUrls: ['./types-list.component.css']
})
export class TypesListComponent {

  types;
  typeId:string = '';

  constructor(private _pokedexService:PokedexService) {
    this._pokedexService.getTypes().subscribe(types => {
      this.types = types.results;
      console.log(this.types);
    });
  }

  updateId() {
    var tmp = this.types.filter((item) => {
      if (item.name === 'unknown' || item.name === 'shadow') {
        return;
      }
      return item.name.includes(this.typeId.toLowerCase());
    });
    return tmp;
  }
}
