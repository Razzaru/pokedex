import { Component, OnInit } from '@angular/core';
import {PokedexService} from "../services/pokedex.service";

@Component({
  selector: 'app-moves-list',
  templateUrl: './moves-list.component.html',
  styleUrls: ['./moves-list.component.css']
})
export class MovesListComponent implements OnInit {

  offset: number = 0;
  moves;
  currentPage:string = 'https://pokeapi.co/api/v2/move/?offset=0';
  nextPage: string;
  moveId: string = '';

  constructor(private _pokedexService: PokedexService) {
    this._pokedexService.getByUrl(this.currentPage).subscribe(moves => {
      this.moves = moves.results;
      this.nextPage = moves.next;
      console.log(this.moves);
    });
  }

  nextPageNav() {
    this._pokedexService.getByUrl(this.nextPage).subscribe(moves => {
      this.moves = moves.results;
      this.currentPage = this.nextPage;
      this.nextPage = moves.next;
    });
    if ((this.currentPage).length >= 40) {
      this.offset += 20;
    }
  }

  prevPageNav() {
    this._pokedexService.getMoves(this.offset).subscribe(moves => {
      this.moves = moves.results;
      this.nextPage = moves.next
    });
    this.offset -= 20;
  }

  updateId() {
    var tmp = this.moves.filter((item) => {
      return item.name.includes(this.moveId.toLowerCase());
    });
    return tmp;
  }

  ngOnInit() {
  }

}
