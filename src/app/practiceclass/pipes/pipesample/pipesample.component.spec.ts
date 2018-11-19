import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesampleComponent } from './pipesample.component';

describe('PipesampleComponent', () => {
  let component: PipesampleComponent;
  let fixture: ComponentFixture<PipesampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipesampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
