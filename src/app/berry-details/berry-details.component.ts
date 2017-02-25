import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PokedexService} from "../services/pokedex.service";

@Component({
  selector: 'app-berry-details',
  templateUrl: './berry-details.component.html',
  styleUrls: ['./berry-details.component.css']
})
export class BerryDetailsComponent implements OnInit {

  activeBerry;

  constructor(private _pokedexService:PokedexService, private _route:ActivatedRoute) { }

  ngOnInit() {
    this._route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this._pokedexService.getBerryById(id)
          .subscribe(berry => {
            this.activeBerry = berry;
            console.log(this.activeBerry);
          })
      })
  }

}
