import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplesecurityComponent } from './samplesecurity.component';

describe('SamplesecurityComponent', () => {
  let component: SamplesecurityComponent;
  let fixture: ComponentFixture<SamplesecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamplesecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplesecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
