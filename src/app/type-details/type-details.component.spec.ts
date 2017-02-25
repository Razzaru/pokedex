/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TypeDetailsComponent } from './type-details.component';

describe('TypeDetailsComponent', () => {
  let component: TypeDetailsComponent;
  let fixture: ComponentFixture<TypeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PokemonListComponent,
        PokemonDetailsComponent,
        CapitalizePipe,
        GenerationComponent,
        GenerationsListComponent,
        SidebarComponent,
        TypesListComponent,
        TypeDetailsComponent,
        AbilitiesListComponent,
        AbilityDetailsComponent,
        LoadingComponent,
        MovesListComponent,
        MoveDetailsComponent,
        ItemsListComponent,
        ItemDetailsComponent,
        EncountersComponent,
        BerriesListComponent,
        BerryDetailsComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
      ],
      providers: [PokedexService],
      bootstrap: [AppComponent]
    });
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(true).toBe(true);
  });
});
