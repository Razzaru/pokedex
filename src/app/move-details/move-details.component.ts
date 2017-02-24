import { Component, OnInit } from '@angular/core';
import {PokedexService} from "../services/pokedex.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-move-details',
  templateUrl: './move-details.component.html',
  styleUrls: ['./move-details.component.css']
})
export class MoveDetailsComponent implements OnInit {

  activeMove;

  constructor(private _pokedexService:PokedexService, private _route:ActivatedRoute) { }

  ngOnInit() {
    this._route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this._pokedexService.getMoveById(id)
          .subscribe(move => {
            this.activeMove = move;
            console.log(this.activeMove);
          })
      })
  }

}
