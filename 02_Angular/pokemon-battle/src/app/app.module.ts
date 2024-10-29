import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BattleComponent } from './pages/battle/battle.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { provideHttpClient } from '@angular/common/http';
import { LottieComponent, provideLottieOptions } from 'ngx-lottie';

@NgModule({
  declarations: [AppComponent, BattleComponent, PokemonComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, LottieComponent],
  providers: [
    provideHttpClient(),
    provideLottieOptions({
      player: () => import('lottie-web'),
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
