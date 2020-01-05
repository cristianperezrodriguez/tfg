import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAssignaturaComponent } from './info-assignatura.component';

describe('InfoAssignaturaComponent', () => {
  let component: InfoAssignaturaComponent;
  let fixture: ComponentFixture<InfoAssignaturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoAssignaturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoAssignaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
