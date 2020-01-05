import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaAssignaturaComponent } from './nova-assignatura.component';

describe('NovaAssignaturaComponent', () => {
  let component: NovaAssignaturaComponent;
  let fixture: ComponentFixture<NovaAssignaturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaAssignaturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaAssignaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
