import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnectionComponent } from './connection.component';
import { ConnectionIntroComponent } from './connection-intro/connection-intro.component';
import { ConnectionFilterComponent } from './connection-filter/connection-filter.component';
import { ConnectionGraphComponent } from './connection-graph/connection-graph.component';
import { ConnectionReportComponent } from './connection-report/connection-report.component';


const routes: Routes = [

  {
    path: '', component: ConnectionComponent,
    children: [
    { path: '', redirectTo: 'intro' },
    { path: 'intro', component: ConnectionIntroComponent },
    { path: 'filter', component: ConnectionFilterComponent},
    { path: 'graph', component: ConnectionGraphComponent},
    { path: 'report', component: ConnectionReportComponent},
 ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnectionRoutingModule { }
