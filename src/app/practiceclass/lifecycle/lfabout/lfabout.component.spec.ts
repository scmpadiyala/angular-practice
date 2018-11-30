import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LfaboutComponent } from './lfabout.component';

describe('LfaboutComponent', () => {
  let component: LfaboutComponent;
  let fixture: ComponentFixture<LfaboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LfaboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LfaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
