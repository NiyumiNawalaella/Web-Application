import { TestBed } from '@angular/core/testing';

import { WebReqInterceptorService } from './';

describe('WebReqInterceptorService', () => {
  let service: WebReqInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebReqInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
