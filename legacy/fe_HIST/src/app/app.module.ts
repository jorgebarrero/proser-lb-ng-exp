// Angular
import {
    // LOCALE_ID,
    NgModule } from '@angular/core';
import { BrowserModule,  } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { PivotTableModule } from 'a4-pivot-table';

// used to create fake backend
import { fakeBackendProvider } from './shared/helpers';

// import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from './shared/modules/';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { HttpModule } from '@angular/http';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { DataTablesModule } from 'angular-datatables';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ExcelService } from './shared/services/excel.service';


import { AlertComponent } from './shared/directives/alert.component';
import { AuthGuard } from './shared/guards';
import { JwtInterceptor } from './shared/helpers/index';
import {
//   AlertService,
//   AuthenticationService,
//   ConexionDesconexionService,
//   DetalladoAuxiliaresService,
//   DetalladoSalienteService,
//   DetalleLlamadasService,
//   OperativoDetalladoService,
//   ProductividadService,
// //   SalienteIntervaloService,
//   ServicioDiarioService,
//   ServicioHistoricoService,
//   ServicioIntervaloService,
//   UserService,

} from './shared/services/index';


import { HomeComponent } from './pages/home';
import { LoginComponent } from './pages/login';
import { RegisterComponent } from './pages/register';
import { ConfigModule } from './layout/config/config.module';




// AoT requires an exported function for factories
export const createTranslateLoader = (http: HttpClient) => {
    /* for development
    return new TranslateHttpLoader(
        http,
        '/start-angular/SB-Admin-BS4-Angular-6/master/dist/assets/i18n/',
        '.json'
    ); */
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};


@NgModule({
    imports: [
        // CommonModule,
        BrowserModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        ConfigModule,
        NgxJsonViewerModule,
        AngularMaterialModule,
        HttpClientModule,
        HttpModule,
        DataTablesModule,
        NgxDatatableModule,
        PivotTableModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        NgbModule.forRoot(),
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
    ],
    providers: [
      AuthGuard,
    //   AlertService,
    //   AuthenticationService,
    //   ConexionDesconexionService,
    //   DetalladoAuxiliaresService,
    //   DetalladoSalienteService,
    //   DetalleLlamadasService,
    //   OperativoDetalladoService,
    //   ProductividadService,
    //   SalienteIntervaloService,
    //   ServicioDiarioService,
    //   ServicioHistoricoService,
    //   ServicioIntervaloService,
    //   UserService,
    //   ExcelService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },
        // { provide: LOCALE_ID, useValue: 'es' },
        // provider used to create fake backend
        fakeBackendProvider,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
