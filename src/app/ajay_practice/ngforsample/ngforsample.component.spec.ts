import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforsampleComponent } from './ngforsample.component';

describe('NgforsampleComponent', () => {
  let component: NgforsampleComponent;
  let fixture: ComponentFixture<NgforsampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgforsampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgforsampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
