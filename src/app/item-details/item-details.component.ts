import { Component, OnInit } from '@angular/core';
import {PokedexService} from "../services/pokedex.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  activeItem;

  constructor(private _pokedexService:PokedexService, private _route:ActivatedRoute) { }

  ngOnInit() {
    this._route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this._pokedexService.getItemById(id)
          .subscribe(item => {
            this.activeItem = item;
            console.log(this.activeItem);
          })
      })
  }

}
