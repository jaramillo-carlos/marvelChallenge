import { TestBed } from '@angular/core/testing';

import { FavouriteComicsService } from './favourite-comics.service';

describe('FavouriteComicsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FavouriteComicsService = TestBed.get(FavouriteComicsService);
    expect(service).toBeTruthy();
  });
});
