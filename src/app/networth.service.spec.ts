import { TestBed } from '@angular/core/testing';

import { NetworthService } from './networth.service';

describe('NetworthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NetworthService = TestBed.get(NetworthService);
    expect(service).toBeTruthy();
  });
});
