/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GenerationsListComponent } from './generations-list.component';

describe('GenerationsListComponent', () => {
  let component: GenerationsListComponent;
  let fixture: ComponentFixture<GenerationsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerationsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(true).toBe(true);
  });
});
