
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared/guards';

import { LoginComponent } from './pages/login';
import { RegisterComponent } from './pages/register';


const routes: Routes = [
    { path: '', loadChildren: './layout/layout.module#LayoutModule', canActivate: [AuthGuard] },

    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },


    { path: 'error', loadChildren: './pages/server-error/server-error.module#ServerErrorModule' },
    { path: 'access-denied', loadChildren: './pages/access-denied/access-denied.module#AccessDeniedModule' },
    { path: 'not-found', loadChildren: './pages/not-found/not-found.module#NotFoundModule' },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
