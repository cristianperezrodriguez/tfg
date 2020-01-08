import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LlistatActivitatsAssignaturaComponent } from './llistat-activitats-assignatura.component';

describe('LlistatActivitatsAssignaturaComponent', () => {
  let component: LlistatActivitatsAssignaturaComponent;
  let fixture: ComponentFixture<LlistatActivitatsAssignaturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LlistatActivitatsAssignaturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LlistatActivitatsAssignaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
