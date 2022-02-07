import { TestBed } from '@angular/core/testing';

import { StackerService } from './stacker.service';

describe('StackerService', () => {
  let service: StackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
