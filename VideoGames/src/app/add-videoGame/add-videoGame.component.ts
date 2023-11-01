import { Component, OnInit } from '@angular/core';
import { VideoGame } from '../model/videoGame.model';
import { VideoGameService } from '../services/videoGame.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-add-videoGame',
  templateUrl: './add-videoGame.component.html',
})
export class AddvideoGameComponent implements OnInit {
  newVideoGame = new VideoGame();
  categories!: Categorie[];
  newIdCat!: number;
  newCategorie!: Categorie;
  constructor(
    private videoGameService: VideoGameService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.categories = this.videoGameService.listeCategories();
  }

  addVideoGame() {
    this.newCategorie = this.videoGameService.consulterCategorie(this.newIdCat);
    this.videoGameService.ajouterVideoGame(this.newVideoGame);
    this.router.navigate(['videoGames']);
  }
}
