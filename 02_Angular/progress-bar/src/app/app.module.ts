import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomProgressBarComponent } from './components/custom-progress-bar/custom-progress-bar.component';
import { FormsModule } from '@angular/forms';
import { CustomProgressBarTwoComponent } from './components/custom-progress-bar-two/custom-progress-bar-two.component';

@NgModule({
  declarations: [AppComponent, CustomProgressBarComponent, CustomProgressBarTwoComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
