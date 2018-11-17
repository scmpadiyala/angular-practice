import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderfromComponent } from './orderfrom.component';

describe('OrderfromComponent', () => {
  let component: OrderfromComponent;
  let fixture: ComponentFixture<OrderfromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderfromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderfromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
