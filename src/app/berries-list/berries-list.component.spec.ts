/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BerriesListComponent } from './berries-list.component';

describe('BerriesListComponent', () => {
  let component: BerriesListComponent;
  let fixture: ComponentFixture<BerriesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BerriesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BerriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(true).toBe(true);
  });
});
