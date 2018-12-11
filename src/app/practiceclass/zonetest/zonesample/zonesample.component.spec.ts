import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonesampleComponent } from './zonesample.component';

describe('ZonesampleComponent', () => {
  let component: ZonesampleComponent;
  let fixture: ComponentFixture<ZonesampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZonesampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonesampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
