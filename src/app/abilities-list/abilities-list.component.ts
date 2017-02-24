import { Component, OnInit } from '@angular/core';
import {PokedexService} from "../services/pokedex.service";

@Component({
  selector: 'app-abilities-list',
  templateUrl: './abilities-list.component.html',
  styleUrls: ['./abilities-list.component.css']
})
export class AbilitiesListComponent implements OnInit {

  offset: number = 0;
  abilities;
  currentPage:string = 'http://pokeapi.co/api/v2/ability/?offset=0';
  nextPage: string;
  abilityId: string = '';

  constructor(private _pokedexService: PokedexService) {
    this._pokedexService.getByUrl(this.currentPage).subscribe(abilities => {
      this.abilities = abilities.results;
      this.nextPage = abilities.next;
      console.log(this.abilities);
    });
  }

  nextPageNav() {
    this._pokedexService.getByUrl(this.nextPage).subscribe(abilities => {
      this.abilities = abilities.results;
      this.currentPage = this.nextPage;
      this.nextPage = abilities.next;
    });
    if ((this.currentPage).length >= 43) {
      this.offset += 20;
    }
  }

  prevPageNav() {
    this._pokedexService.getAbilities(this.offset).subscribe(abilities => {
      this.abilities = abilities.results;
      this.nextPage = abilities.next
    });
    this.offset -= 20;
  }

  updateId() {
    var tmp = this.abilities.filter((item) => {
      return item.name.includes(this.abilityId.toLowerCase());
    });
    return tmp;
  }

  ngOnInit() {
  }

}
