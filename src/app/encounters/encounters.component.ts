import {Component, OnInit} from '@angular/core';
import {PokedexService} from "../services/pokedex.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.component.html',
  styleUrls: ['./encounters.component.css']
})
export class EncountersComponent implements OnInit {

  activeEnc;

  constructor(private _pokedexService:PokedexService, private _route:ActivatedRoute) {
  }

  ngOnInit() {
    this._route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this._pokedexService.getEncounterById(id)
          .subscribe(enc => {
            this.activeEnc = enc;
            console.log(this.activeEnc)
          })
      })
  }

}
