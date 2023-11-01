import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddvideoGameComponent } from './add-videoGame/add-videoGame.component';
import { UpdatevideoGameComponent } from './update-videoGame/update-videoGame.component';
import { VideoGamesComponent } from './videoGames/videoGames.component';

@NgModule({
  declarations: [
    AppComponent,
    UpdatevideoGameComponent,
    AddvideoGameComponent,
    VideoGamesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
