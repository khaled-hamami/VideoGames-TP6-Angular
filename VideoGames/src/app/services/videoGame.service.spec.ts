import { TestBed } from '@angular/core/testing';

import { VideoGameService } from './videoGame.service';

describe('VideoGameService', () => {
  let service: VideoGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
