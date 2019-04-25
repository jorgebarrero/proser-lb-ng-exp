import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';


const routes: Routes = [
  {
      path: '',
      component: LayoutComponent,
      children: [
          { path: '', redirectTo: 'intro' },
          { path: 'intro', loadChildren: './intro/intro.module#IntroModule' },
          { path: 'configuration', loadChildren: './configuration/configuration.module#ConfigurationModule' },
          { path: 'filter', loadChildren: './filter/filter.module#FilterModule' },
          { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
          { path: 'display', loadChildren: './display/display.module#DisplayModule' },

          { path: 'audit', loadChildren: './audit/audit.module#AuditModule' },
          { path: 'system', loadChildren: './system/system.module#SystemModule' },

          { path: 'selector', loadChildren: './selector/selector.module#SelectorModule' },

            { path: 'config', loadChildren: './config/config.module#ConfigModule' },

          { path: 'reports', loadChildren: './reports/reports.module#ReportsModule' },


          {
            path: 'conexion-desconexion',
            loadChildren: './reports/conexion-desconexion/conexion-desconexion.module#ConexionDesconexionModule'
          },
          // {
          //   path: 'detalle-auxiliares',
          //   loadChildren: './hist/detalle-auxiliares/detalle-auxiliares.module#DetalleAuxiliaresModule'
          // },
          // {
          //   path: 'detalle-asignaciones',
          //   loadChildren: './hist/detalle-asignaciones/detalle-asignaciones.module#DetalleAsignacionesModule'
          // },
          // {
          //   path: 'detallado-auxiliares',
          //   loadChildren: './hist/detallado-auxiliares/detallado-auxiliares.module#DetalladoAuxiliaresModule'
          // },
          // {
          //   path: 'detallado-asignaciones',
          //   loadChildren: './hist/detallado-asignaciones/detallado-asignaciones.module#DetalladoAsignacionesModule'
          // },
          // {
          //   path: 'detalle-llamadas',
          //   loadChildren: './hist/detalle-llamadas/detalle-llamadas.module#DetalleLlamadasModule'
          // },
          // {
          //   path: 'operativo-detallado',
          //   loadChildren: './hist/operativo-detallado/operativo-detallado.module#OperativoDetalladoModule'
          // },
          // {
          //   path: 'productividad',
          //   loadChildren: './hist/productividad/productividad.module#ProductividadModule'
          // },
          // {
          //   path: 'servicio-diario',
          //   loadChildren: './hist/servicio-diario/servicio-diario.module#ServicioDiarioModule'
          // },
          // {
          //   path: 'servicio-intervalo',
          //   loadChildren: './hist/servicio-intervalo/servicio-intervalo.module#ServicioIntervaloModule'
          // },

          // {
          //   path: 'servicio-historico',
          //   loadChildren: './hist/servicio-historico/servicio-historico.module#ServicioHistoricoModule'
          // },

          // {
          //   path: 'entrante-diario',
          //   loadChildren: './hist/entrante-diario/entrante-diario.module#EntranteDiarioModule'
          // },

          // {
          //   path: 'entrante-dashboard',
          //   loadChildren: './hist/entrante-dashboard/entrante-dashboard.module#EntranteDashboardModule'
          // },

          // {
          //   path: 'cdr',
          //   loadChildren: './hist/cdr/cdr.module#CdrModule'
          // },

          // {
          //   path: 'entrante-intervalo',
          //   loadChildren: './hist/entrante-intervalo/entrante-intervalo.module#EntranteIntervaloModule'
          // },

          // {
          //   path: 'manual-diario',
          //   loadChildren: './hist/manual-diario/manual-diario.module#ManualDiarioModule'
          // },
          // {
          //   path: 'manual-intervalo',
          //   loadChildren: './hist/manual-intervalo/manual-intervalo.module#ManualIntervaloModule'
          // },

          // {
          //   path: 'agentes',
          //   loadChildren: './hist/agentes/agentes.module#AgentesModule'
          // },
          // {
          //   path: 'config',
          //   loadChildren: './config/config.module#ConfigModule'
          // },


      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
