import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdchildComponent } from './cdchild.component';

describe('CdchildComponent', () => {
  let component: CdchildComponent;
  let fixture: ComponentFixture<CdchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
