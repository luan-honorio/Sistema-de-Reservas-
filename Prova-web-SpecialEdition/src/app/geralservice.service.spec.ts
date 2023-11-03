import { TestBed } from '@angular/core/testing';

import { GeralserviceService } from './geralservice.service';

describe('GeralserviceService', () => {
  let service: GeralserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeralserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
