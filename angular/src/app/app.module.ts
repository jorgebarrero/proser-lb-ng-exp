import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';


import { AuthGuard } from './shared/guards';


import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';




import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MainmenuComponent } from './pages/mainmenu/mainmenu.component';
import { ErrorComponent } from './pages/error/error.component';
import { AccessdeniedComponent } from './pages/accessdenied/accessdenied.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { LoginComponent } from './user/login/login.component';
import { RegisteruserComponent } from './user/registeruser/registeruser.component';
import { ListuserComponent } from './user/listuser/listuser.component';

import { EnvServiceProvider } from './shared/services/env.service.provider';
import { MainheaderComponent } from './pages/mainheader/mainheader.component';
import { MainfooterComponent } from './pages/mainfooter/mainfooter.component';

import { AlertService } from './shared/services/alert.service';
import { AlertModule } from './shared/modules/alert/alert.module';
import { AngularMaterialModule } from './shared/modules/angular-material/angular-material.module';
import { RegisterWelcomeComponent } from './user/registeruser/register-welcome/register-welcome.component';
import { ConnectionModule } from './shared/modules/connection/connection.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MainmenuComponent,
    ErrorComponent,
    AccessdeniedComponent,
    NotfoundComponent,
    RegisteruserComponent,
    ListuserComponent,
    MainheaderComponent,
    MainfooterComponent,
    RegisterWelcomeComponent,
  ],
  imports: [
    NgxDatatableModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AlertModule,
    AngularMaterialModule,
    NgbModule,
    ConnectionModule,
    AppRoutingModule
  ],
  providers: [EnvServiceProvider, AuthGuard, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
