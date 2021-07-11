import { TestBed } from '@angular/core/testing';

import { TransformDateService } from './transform-date.service';

describe('TransformDateService', () => {
  let service: TransformDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransformDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
