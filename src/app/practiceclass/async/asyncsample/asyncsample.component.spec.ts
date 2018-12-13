import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncsampleComponent } from './asyncsample.component';

describe('AsyncsampleComponent', () => {
  let component: AsyncsampleComponent;
  let fixture: ComponentFixture<AsyncsampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncsampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncsampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
