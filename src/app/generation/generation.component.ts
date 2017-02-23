import {Component, OnInit, OnChanges} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PokedexService} from "../services/pokedex.service";

@Component({
  selector: 'app-generation',
  templateUrl: './generation.component.html',
  styleUrls: ['./generation.component.css']
})
export class GenerationComponent implements OnChanges {

  generation;

  constructor(private _pokedexService: PokedexService, private _route: ActivatedRoute) {
    this._route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this._pokedexService.getSingleGen(id)
          .subscribe(gen => {
            this.generation = gen;
            console.log(this.generation);
          })
      });
  }

  ngOnChanges() {

  }

}
