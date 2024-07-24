/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PrmotionAdsService } from './prmotionAds.service';

describe('Service: PrmotionAds', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrmotionAdsService]
    });
  });

  it('should ...', inject([PrmotionAdsService], (service: PrmotionAdsService) => {
    expect(service).toBeTruthy();
  }));
});
