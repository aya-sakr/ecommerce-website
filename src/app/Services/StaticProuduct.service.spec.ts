/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StaticProuductService } from './StaticProuduct.service';

describe('Service: StaticProuduct', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StaticProuductService],
    });
  });

  it('should ...', inject(
    [StaticProuductService],
    (service: StaticProuductService) => {
      expect(service).toBeTruthy();
    }
  ));
});
