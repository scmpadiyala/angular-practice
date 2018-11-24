import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { I18HomeComponent } from './i18-home.component';

describe('I18HomeComponent', () => {
  let component: I18HomeComponent;
  let fixture: ComponentFixture<I18HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ I18HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(I18HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
