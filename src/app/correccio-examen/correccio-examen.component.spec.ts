import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorreccioExamenComponent } from './correccio-examen.component';

describe('CorreccioExamenComponent', () => {
  let component: CorreccioExamenComponent;
  let fixture: ComponentFixture<CorreccioExamenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorreccioExamenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorreccioExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
