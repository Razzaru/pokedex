import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PokedexService} from "../services/pokedex.service";

@Component({
  selector: 'app-type-details',
  templateUrl: './type-details.component.html',
  styleUrls: ['./type-details.component.css']
})
export class TypeDetailsComponent implements OnInit {

  activeType;

  constructor(private _pokedexService:PokedexService, private _route:ActivatedRoute) { }

  ngOnInit() {
    this._route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this._pokedexService.getTypeById(id)
          .subscribe(type => {
            this.activeType = type;
            console.log(this.activeType);
          })
      })
  }

  

}
