import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RegistroComponent } from './components/registro/registro.component';
import { MaterialModule } from './modules/material.module';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegistroComponent],
  imports: [BrowserModule, AppRoutingModule, MaterialModule],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
