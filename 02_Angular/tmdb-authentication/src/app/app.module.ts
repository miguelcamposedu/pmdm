import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { ApprovedComponent } from './components/approved/approved.component';
import { ApiKeyInterceptor } from './interceptor/api-key.interceptor';

@NgModule({
  declarations: [AppComponent, HomeComponent, ApprovedComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [
    provideHttpClient(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiKeyInterceptor,
      multi: true, // Ensure multiple interceptors can coexist
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
