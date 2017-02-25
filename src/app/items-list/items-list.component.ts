import { Component, OnInit } from '@angular/core';
import {PokedexService} from "../services/pokedex.service";

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  offset: number = 0;
  items;
  currentPage:string = 'https://pokeapi.co/api/v2/item/?offset=0';
  nextPage: string;
  itemId: string = '';

  constructor(private _pokedexService: PokedexService) {
    this._pokedexService.getByUrl(this.currentPage).subscribe(items => {
      this.items = items.results;
      this.nextPage = items.next;
      console.log(this.items);
    });
  }

  nextPageNav() {
    this._pokedexService.getByUrl(this.nextPage).subscribe(items => {
      this.items = items.results;
      this.currentPage = this.nextPage;
      this.nextPage = items.next;
    });
    if ((this.currentPage).length >= 40) {
      this.offset += 20;
    }
  }

  prevPageNav() {
    this._pokedexService.getItems(this.offset).subscribe(items => {
      this.items = items.results;
      this.nextPage = items.next
    });
    this.offset -= 20;
  }

  updateId() {
    var tmp = this.items.filter((item) => {
      return item.name.includes(this.itemId.toLowerCase());
    });
    return tmp;
  }

  ngOnInit() {
  }

}
