import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GasListComponent } from './components/gas-list/gas-list.component';
import { provideHttpClient } from '@angular/common/http';
import { GoogleMapsLinkPipe } from './pipes/google-maps-link.pipe';
import { GoogleMapRoutePipe } from './pipes/google-map-route.pipe';

@NgModule({
  declarations: [AppComponent, GasListComponent, GoogleMapsLinkPipe, GoogleMapRoutePipe],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
