import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ApiRequestComponent } from './api-request/api-request.component';
import { DirectivesComponent } from './directives/directives.component';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './input-output/parent/parent.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PipesComponent } from './pipes/pipes.component';
import { RoutingDetailsComponent } from './routing/routing-details/routing-details.component';
import { RoutingComponent } from './routing/routing.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ComponentAComponent } from './services/component-a/component-a.component';
import { ComponentBComponent } from './services/component-b/component-b.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'directives', component: DirectivesComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'input-output', component: ParentComponent},
  {path: 'template-driven-form', component: TemplateDrivenFormComponent},
  {path: 'component-a', component: ComponentAComponent},
  {path: 'component-b', component: ComponentBComponent},
  {path: 'rxjs', component: RxjsComponent},
  {path: 'api-request', component: ApiRequestComponent},
  {path: 'users', component: RoutingComponent},
  {path: 'users/user/:id', component: RoutingDetailsComponent},
  {path: 'pipes', component: PipesComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
