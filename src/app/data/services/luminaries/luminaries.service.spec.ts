import { TestBed } from '@angular/core/testing';

import { LuminariesService } from './luminaries.service';

describe('LuminariesService', () => {
  let service: LuminariesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LuminariesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
