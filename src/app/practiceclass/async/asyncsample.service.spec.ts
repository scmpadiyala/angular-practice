import { TestBed, inject } from '@angular/core/testing';

import { AsyncsampleService } from './asyncsample.service';

describe('AsyncsampleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AsyncsampleService]
    });
  });

  it('should be created', inject([AsyncsampleService], (service: AsyncsampleService) => {
    expect(service).toBeTruthy();
  }));
});
