import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Ajoute celle ligne là
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DirectivesComponent } from './directives/directives.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    DirectivesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Et celle-ci
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
