import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JwtModule } from '@auth0/angular-jwt';

//
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HomepageComponent } from './homepage/homepage.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
// Components
import { LandingComponent } from './landing/landing.component';
import { FooterComponent } from './footer/footer.component';
import { PageNoFoundComponent } from './page-no-found/page-no-found.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ShapersComponent } from './shapers/shapers.component';
import { ShaperDetailsComponent } from './shaper-details/shaper-details.component';
import { LworkersComponent } from './lworkers/lworkers.component';
import { LworkerDetailsComponent } from './lworker-details/lworker-details.component';
import { PressComponent } from './press/press.component';
import { NewShaperComponent } from './Admin-panel/new-shaper/new-shaper.component';
import { NewLworkerComponent } from './Admin-panel/new-lworker/new-lworker.component';
import { NewPressComponent } from './Admin-panel/new-press/new-press.component';
import { AdminHomepageComponent } from './Admin-panel/admin-homepage/admin-homepage.component';
import { AuthService } from './Providers/auth/auth.service';
import { AuthGuard } from './Providers/auth/auth.guard';
// Materials
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import { LoginComponent } from './Admin-panel/login/login.component';
import {FormsModule} from '@angular/forms';
import { AdminHeaderComponent } from './Admin-panel/admin-header/admin-header.component';
import { NewProjectComponent } from './Admin-panel/new-project/new-project.component';
import { FileUploadModule } from 'ng2-file-upload';

const appRoutes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'landing', component: LandingComponent },
  { path: '**', component: PageNoFoundComponent }
];
export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomepageComponent,
    LandingComponent,
    FooterComponent,
    PageNoFoundComponent,
    ProjectsComponent,
    ProjectDetailsComponent,
    ShapersComponent,
    ShaperDetailsComponent,
    LworkersComponent,
    LworkerDetailsComponent,
    PressComponent,
    NewShaperComponent,
    NewLworkerComponent,
    NewPressComponent,
    AdminHomepageComponent,
    LoginComponent,
    AdminHeaderComponent,
    NewProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    FontAwesomeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    FileUploadModule,
    RouterModule.forRoot(
        appRoutes
    ),
    NgMultiSelectDropDownModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: ['localhost:4000'],
      }
    }),
    FormsModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
