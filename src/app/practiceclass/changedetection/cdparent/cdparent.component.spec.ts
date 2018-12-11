import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdparentComponent } from './cdparent.component';

describe('CdparentComponent', () => {
  let component: CdparentComponent;
  let fixture: ComponentFixture<CdparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
