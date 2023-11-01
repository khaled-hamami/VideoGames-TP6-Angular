import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VideoGame } from '../model/videoGame.model';
import { VideoGameService } from '../services/videoGame.service';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-update-videoGame',
  templateUrl: './update-videoGame.component.html',
})
export class UpdatevideoGameComponent {
  currentVideoGame = new VideoGame();
  categories!: Categorie[];
  updatedCatId!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private videoGameService: VideoGameService
  ) {}

  ngOnInit(): void {
    this.categories = this.videoGameService.listeCategories();
    this.currentVideoGame = this.videoGameService.consulterVideoGame(
      this.activatedRoute.snapshot.params['id']
    );
    console.log(this.currentVideoGame);
  }
  updateVideoGame() {
    this.currentVideoGame.categorie = this.videoGameService.consulterCategorie(
      this.updatedCatId
    );
    this.videoGameService.updateVideoGame(this.currentVideoGame);
    this.router.navigate(['videoGames']);
  }
}
