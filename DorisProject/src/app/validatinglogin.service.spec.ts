import { TestBed } from '@angular/core/testing';

import { ValidatingloginService } from './validatinglogin.service';

describe('ValidatingloginService', () => {
  let service: ValidatingloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidatingloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
