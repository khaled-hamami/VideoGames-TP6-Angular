import { Injectable } from '@angular/core';
import { VideoGame } from '../model/videoGame.model';
import { Router } from '@angular/router';
import { Categorie } from '../model/categorie.model';

@Injectable({
  providedIn: 'root',
})
export class VideoGameService {
  videoGames: VideoGame[];
  categories: Categorie[];

  constructor() {
    this.categories = [
      { idCat: 1, nomCat: 'FPS' },
      { idCat: 2, nomCat: 'TPS' },
    ];
    this.videoGames = [
      {
        idVideoGame: 1,
        nomVideoGame: 'Grand Theft Auto',
        prixVideoGame: 3000.6,
        dateCreation: new Date('01/14/2011'),
        categorie: { idCat: 1, nomCat: 'TPS' },
      },
      {
        idVideoGame: 2,
        nomVideoGame: 'Valorant',
        prixVideoGame: 450,
        dateCreation: new Date('12/17/2010'),
        categorie: { idCat: 1, nomCat: 'FPS' },
      },
      {
        idVideoGame: 3,
        nomVideoGame: 'Dying Light 2',
        prixVideoGame: 900.123,
        dateCreation: new Date('02/20/2020'),
        categorie: { idCat: 1, nomCat: 'FPS' },
      },
    ];
  }
  listeVideoGame(): VideoGame[] {
    return this.videoGames;
  }

  ajouterVideoGame(videoGame: VideoGame) {
    this.videoGames.push(videoGame);
  }

  supprimerVideoGame(game: VideoGame) {
    const index = this.videoGames.indexOf(game, 0);
    if (index > -1) {
      this.videoGames.splice(index, 1);
    }
  }
  consulterVideoGame(id: number): VideoGame {
    return this.videoGames.find((p) => p.idVideoGame == id)!;
  }
  updateVideoGame(vg: VideoGame) {
    this.supprimerVideoGame(vg);
    this.ajouterVideoGame(vg);
    this.trierVideoGames();
  }
  listeCategories(): Categorie[] {
    return this.categories;
  }
  consulterCategorie(id: number): Categorie {
    return this.categories.find((cat) => cat.idCat == id)!;
  }
  trierVideoGames() {
    this.videoGames = this.videoGames.sort((n1, n2) => {
      if ((n1.idVideoGame || 0) > (n2.idVideoGame || 1)) {
        return 1;
      }
      if ((n1.idVideoGame || 1) < (n2.idVideoGame || 0)) {
        return -1;
      }
      return 0;
    });
  }
}
