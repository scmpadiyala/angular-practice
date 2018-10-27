import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bindingsample10Component } from './bindingsample10.component';

describe('Bindingsample10Component', () => {
  let component: Bindingsample10Component;
  let fixture: ComponentFixture<Bindingsample10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bindingsample10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bindingsample10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
