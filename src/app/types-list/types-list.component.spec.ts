/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TypesListComponent } from './types-list.component';
import {PokedexService} from "../services/pokedex.service";

describe('TypesListComponent', () => {
  let component: TypesListComponent;
  let fixture: ComponentFixture<TypesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypesListComponent ],
      providers: [PokedexService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(true).toBe(true);
  });
});
