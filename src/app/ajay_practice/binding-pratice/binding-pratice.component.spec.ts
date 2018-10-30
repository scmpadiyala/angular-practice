import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingPraticeComponent } from './binding-pratice.component';

describe('BindingPraticeComponent', () => {
  let component: BindingPraticeComponent;
  let fixture: ComponentFixture<BindingPraticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindingPraticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingPraticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
