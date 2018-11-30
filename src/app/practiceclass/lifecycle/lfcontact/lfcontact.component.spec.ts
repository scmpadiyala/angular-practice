import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LfcontactComponent } from './lfcontact.component';

describe('LfcontactComponent', () => {
  let component: LfcontactComponent;
  let fixture: ComponentFixture<LfcontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LfcontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LfcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
