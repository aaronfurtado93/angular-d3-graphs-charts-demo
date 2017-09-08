import { TestBed, inject } from '@angular/core/testing';

import { ChartContainerService } from './chart-container.service';

describe('ChartContainerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChartContainerService]
    });
  });

  it('should be created', inject([ChartContainerService], (service: ChartContainerService) => {
    expect(service).toBeTruthy();
  }));
});
