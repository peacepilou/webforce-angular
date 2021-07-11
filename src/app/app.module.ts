import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { ComponentAComponent } from './services/component-a/component-a.component';
import { ComponentBComponent } from './services/component-b/component-b.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiRequestComponent } from './api-request/api-request.component';

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
    TemplateDrivenFormComponent,
    ComponentAComponent,
    ComponentBComponent,
    RxjsComponent,
    ApiRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
