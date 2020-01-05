import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaActivitatComponent } from './nova-activitat.component';

describe('NovaActivitatComponent', () => {
  let component: NovaActivitatComponent;
  let fixture: ComponentFixture<NovaActivitatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaActivitatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaActivitatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
