import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitreComponent } from './components/titre/titre.component';
import { VilleComponent } from './components/ville/ville.component';
import { DernierScoreComponent } from './components/dernier-score/dernier-score.component';
import { ReactionComponent } from './components/reaction/reaction.component';
import { PubComponent } from './components/pub/pub.component';
import { JoueurComponent } from './components/joueur/joueur.component';
import { MediaComponent } from './components/media/media.component';
import { ClassementComponent } from './components/classement/classement.component';
import { NewsComponent } from './components/news/news.component';
import { MatchSuivantComponent } from './components/match-suivant/match-suivant.component';
import { Pub2Component } from './components/pub2/pub2.component';
import { CalendrierMatchComponent } from './components/calendrier-match/calendrier-match.component';
import { DownBaniereComponent } from './components/down-baniere/down-baniere.component';
import { MeteoComponent } from './components/meteo/meteo.component';
import { YoutubeComponent } from './components/youtube/youtube.component';


@NgModule({
  declarations: [
    AppComponent,
    TitreComponent,
    VilleComponent,
    DernierScoreComponent,
    ReactionComponent,
    PubComponent,
    JoueurComponent,
    MediaComponent,
    ClassementComponent,
    NewsComponent,
    MatchSuivantComponent,
    Pub2Component,
    CalendrierMatchComponent,
    DownBaniereComponent,
    MeteoComponent,
    YoutubeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
