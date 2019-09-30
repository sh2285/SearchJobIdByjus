import { TestBed } from '@angular/core/testing';

import { ServiceAmazonAwsService } from './service-amazon-aws.service';

describe('ServiceAmazonAwsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceAmazonAwsService = TestBed.get(ServiceAmazonAwsService);
    expect(service).toBeTruthy();
  });
});
