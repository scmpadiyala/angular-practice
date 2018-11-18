import { TestBed, inject } from '@angular/core/testing';

import { ItemlistService } from './itemlist.service';

describe('ItemlistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemlistService]
    });
  });

  it('should be created', inject([ItemlistService], (service: ItemlistService) => {
    expect(service).toBeTruthy();
  }));
});
