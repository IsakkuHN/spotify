import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent], // Can be declatativas, components, directives, pipes
  imports: [BrowserModule, AppRoutingModule], // Only import modules
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
