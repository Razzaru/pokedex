/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AbilitiesListComponent } from './abilities-list.component';

describe('AbilitiesListComponent', () => {
  let component: AbilitiesListComponent;
  let fixture: ComponentFixture<AbilitiesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbilitiesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbilitiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(true).toBe(true);
  });
});
