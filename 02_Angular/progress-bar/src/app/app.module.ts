import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomProgressBarComponent } from './components/custom-progress-bar/custom-progress-bar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, CustomProgressBarComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
