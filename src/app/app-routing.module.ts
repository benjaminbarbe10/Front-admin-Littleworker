import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Admin-panel/login/login.component';
import { AuthGuard } from './Providers/auth/auth.guard';
import {AdminHomepageComponent} from './Admin-panel/admin-homepage/admin-homepage.component';
import {NewProjectComponent} from './Admin-panel/new-project/new-project.component';
import {NewShaperComponent} from './Admin-panel/new-shaper/new-shaper.component';
import {NewPressComponent} from './Admin-panel/new-press/new-press.component';
import {NewLworkerComponent} from './Admin-panel/new-lworker/new-lworker.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'admin/test', component: NewProjectComponent},
  { path: 'admin',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: AdminHomepageComponent
      },
      {
        path: 'new-project',
        component: NewProjectComponent
      },
      {
        path: 'new-shaper',
        component: NewShaperComponent
      },
      {
        path: 'new-press',
        component: NewPressComponent
      },
      {
        path: 'new-lworker',
        component: NewLworkerComponent
      }
    ]
  },
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
