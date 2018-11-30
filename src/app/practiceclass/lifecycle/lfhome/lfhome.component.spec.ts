import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LfhomeComponent } from './lfhome.component';

describe('LfhomeComponent', () => {
  let component: LfhomeComponent;
  let fixture: ComponentFixture<LfhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LfhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LfhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
