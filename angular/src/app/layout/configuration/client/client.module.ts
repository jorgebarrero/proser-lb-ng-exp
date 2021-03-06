import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { ClientIntroComponent } from './client-intro/client-intro.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientMenuComponent } from './client-menu/client-menu.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { ClientAddComponent } from './client-add/client-add.component';
import { AlertModule } from 'src/app/shared/modules/alert/alert.module';

@NgModule({
  declarations: [ClientComponent, ClientIntroComponent, ClientListComponent, ClientDetailComponent, ClientMenuComponent, ClientEditComponent, ClientAddComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgSelectModule,
    AlertModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
