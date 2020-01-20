import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarregaCriterisCSVComponent } from './carrega-criteris-csv.component';

describe('CarregaCriterisCSVComponent', () => {
  let component: CarregaCriterisCSVComponent;
  let fixture: ComponentFixture<CarregaCriterisCSVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarregaCriterisCSVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarregaCriterisCSVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
