import { TestBed, inject } from '@angular/core/testing';

import { ChartBarService } from './chart-bar.service';

describe('ChartBarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChartBarService]
    });
  });

  it('should be created', inject([ChartBarService], (service: ChartBarService) => {
    expect(service).toBeTruthy();
  }));
});
