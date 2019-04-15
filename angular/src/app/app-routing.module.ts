import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './shared/guards';

import { LoginComponent } from './user/login/login.component';
import { ErrorComponent } from './pages/error/error.component';
import { AccessdeniedComponent } from './pages/accessdenied/accessdenied.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisteruserComponent } from './user/registeruser/registeruser.component';
import { ListuserComponent } from './user/listuser/listuser.component';

const routes: Routes = [
  { path: '', loadChildren: './layout/layout.module#LayoutModule', canActivate: [AuthGuard] },


  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisteruserComponent },
  { path: 'user/list', component: ListuserComponent },
  { path: 'home', component: HomeComponent },

  { path: 'error', component: ErrorComponent },
  { path: 'access-denied', component: AccessdeniedComponent },
  { path: 'not-found', component: NotfoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
