import { TestBed } from '@angular/core/testing';

import { FavticketService } from './favticket.service';

describe('FavticketService', () => {
  let service: FavticketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavticketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
