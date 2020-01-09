import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LlistatPreguntesActivitatComponent } from './llistat-preguntes-activitat.component';

describe('LlistatPreguntesActivitatComponent', () => {
  let component: LlistatPreguntesActivitatComponent;
  let fixture: ComponentFixture<LlistatPreguntesActivitatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LlistatPreguntesActivitatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LlistatPreguntesActivitatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
