import { Component, OnInit } from '@angular/core';
import {PokedexService} from "../services/pokedex.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-ability-details',
  templateUrl: './ability-details.component.html',
  styleUrls: ['./ability-details.component.css']
})
export class AbilityDetailsComponent implements OnInit {

  activeAbility;

  constructor(private _pokedexService:PokedexService, private _route:ActivatedRoute) { }

  ngOnInit() {
    this._route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this._pokedexService.getAbilityById(id)
          .subscribe(ability => {
            this.activeAbility = ability;
            console.log(this.activeAbility);
          })
      })
  }
}
