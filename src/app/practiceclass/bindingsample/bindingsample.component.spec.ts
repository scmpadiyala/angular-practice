import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingsampleComponent } from './bindingsample.component';

describe('BindingsampleComponent', () => {
  let component: BindingsampleComponent;
  let fixture: ComponentFixture<BindingsampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindingsampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingsampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
