import { TestBed } from '@angular/core/testing';

import { AnimalMapperService } from './animal-mapper.service';

describe('AnimalMapperService', () => {
  let service: AnimalMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimalMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
