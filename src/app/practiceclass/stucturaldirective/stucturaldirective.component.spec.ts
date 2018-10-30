import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StucturaldirectiveComponent } from './stucturaldirective.component';

describe('StucturaldirectiveComponent', () => {
  let component: StucturaldirectiveComponent;
  let fixture: ComponentFixture<StucturaldirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StucturaldirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StucturaldirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
