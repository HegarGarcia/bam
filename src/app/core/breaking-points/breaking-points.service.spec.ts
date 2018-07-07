import { TestBed, inject } from '@angular/core/testing';

import { BreakingPointsService } from './breaking-points.service';

describe('BreakingPointsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BreakingPointsService]
    });
  });

  it('should be created', inject([BreakingPointsService], (service: BreakingPointsService) => {
    expect(service).toBeTruthy();
  }));
});
