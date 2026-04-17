import { TestBed } from '@angular/core/testing';
import { JwtInterceptor } from './jwt-interceptor';
import { Authentication } from '../services/authentication';

describe('JwtInterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        JwtInterceptor,
        {
          provide: Authentication,
          useValue: {
            isLoggedIn: () => false,
            getToken: () => ''
          }
        }
      ]
    });
  });

  it('should be created', () => {
    const interceptor = TestBed.inject(JwtInterceptor);
    expect(interceptor).toBeTruthy();
  });
});