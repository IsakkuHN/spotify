import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [AppComponent], // Can be declatativas, components, directives, pipes
  imports: [BrowserModule, AppRoutingModule, HttpClientModule], // Only import modules
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
