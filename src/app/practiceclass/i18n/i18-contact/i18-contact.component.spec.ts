import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { I18ContactComponent } from './i18-contact.component';

describe('I18ContactComponent', () => {
  let component: I18ContactComponent;
  let fixture: ComponentFixture<I18ContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ I18ContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(I18ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
