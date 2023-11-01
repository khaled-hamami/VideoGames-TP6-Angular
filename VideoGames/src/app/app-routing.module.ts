import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoGamesComponent } from './videoGames/videoGames.component';
import { AddvideoGameComponent } from './add-videoGame/add-videoGame.component';
import { UpdatevideoGameComponent } from './update-videoGame/update-videoGame.component';

const routes: Routes = [
  { path: 'videoGames', component: VideoGamesComponent },
  { path: 'add-videoGame', component: AddvideoGameComponent },
  { path: 'updateVideoGame/:id', component: UpdatevideoGameComponent },
  { path: '', redirectTo: 'videoGames', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
