import { TestBed } from '@angular/core/testing';

import { SolvesService } from './solves.service';

describe('SolvesService', () => {
  let service: SolvesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolvesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
