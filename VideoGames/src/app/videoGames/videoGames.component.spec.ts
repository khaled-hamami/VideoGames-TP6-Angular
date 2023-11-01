import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoGamesComponent } from './videoGames.component';

describe('VideoGamesComponent', () => {
  let component: VideoGamesComponent;
  let fixture: ComponentFixture<VideoGamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoGamesComponent]
    });
    fixture = TestBed.createComponent(VideoGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
