import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StdcontactComponent } from './stdcontact.component';

describe('StdcontactComponent', () => {
  let component: StdcontactComponent;
  let fixture: ComponentFixture<StdcontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StdcontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StdcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
