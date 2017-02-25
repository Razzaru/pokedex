import { Component, OnInit } from '@angular/core';
import {PokedexService} from "../services/pokedex.service";

@Component({
  selector: 'app-berries-list',
  templateUrl: './berries-list.component.html',
  styleUrls: ['./berries-list.component.css']
})
export class BerriesListComponent {

  offset: number = 0;
  berries;
  currentPage:string = 'https://pokeapi.co/api/v2/berry/?offset=0';
  nextPage: string;
  berryId: string = '';

  constructor(private _pokedexService: PokedexService) {
    this._pokedexService.getByUrl(this.currentPage).subscribe(berries => {
      this.berries = berries.results;
      this.nextPage = berries.next;
      console.log(this.berries);
    });
  }

  nextPageNav() {
    this._pokedexService.getByUrl(this.nextPage).subscribe(berries => {
      this.berries = berries.results;
      this.currentPage = this.nextPage;
      this.nextPage = berries.next;
    });
    if ((this.currentPage).length >= 41) {
      this.offset += 20;
    }
  }

  prevPageNav() {
    this._pokedexService.getBerries(this.offset).subscribe(berries => {
      this.berries = berries.results;
      this.nextPage = berries.next
    });
    this.offset -= 20;
  }

  updateId() {
    var tmp = this.berries.filter((item) => {
      return item.name.includes(this.berryId.toLowerCase());
    });
    return tmp;
  }

}
