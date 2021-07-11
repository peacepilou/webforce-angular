import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Ajoute celle ligne là
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DirectivesComponent } from './directives/directives.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ParentComponent } from './input-output/parent/parent.component';
import { ChildComponent } from './input-output/child/child.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    DirectivesComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    ParentComponent,
    ChildComponent,
    TemplateDrivenFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Et celle-ci
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
