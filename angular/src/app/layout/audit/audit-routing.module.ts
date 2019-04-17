import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuditComponent } from './audit.component';
import { AuditIntroComponent } from './audit-intro/audit-intro.component';




const routes: Routes = [
  {
      path: '', component: AuditComponent,
      children: [
        { path: '', redirectTo: 'audit-intro' },

        { path: 'audit-intro', component: AuditIntroComponent },

    ] 
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuditRoutingModule { }
