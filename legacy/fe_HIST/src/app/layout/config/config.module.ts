import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';


import { NowModule } from './../../shared/modules/now/now.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ConfigRoutingModule } from './config-routing.module';

import { ConfigComponent } from './config.component';
import { ConfigIntroComponent } from './config-intro/config-intro.component';
import { ConfigClienteComponent } from './config-cliente/config-cliente.component';
import { ConfigColaComponent } from './config-cola/config-cola.component';
import { ConfigServicioComponent } from './config-servicio/config-servicio.component';
import { ConfigCampanaComponent } from './config-campana/config-campana.component';
import { ConfigSupervisorComponent } from './config-supervisor/config-supervisor.component';
import { ConfigSuplenteComponent } from './config-suplente/config-suplente.component';
import { ConfigAgenteComponent } from './config-agente/config-agente.component';
import { ConfigHorarioComponent } from './config-horario/config-horario.component';
import { ConfigTipoComponent } from './config-tipo/config-tipo.component';
import { ConfigModoComponent } from './config-modo/config-modo.component';
import { ConfigHoraInicioComponent } from './config-hora-inicio/config-hora-inicio.component';
import { ConfigHoraFinalComponent } from './config-hora-final/config-hora-final.component';
import { ConfigIntervaloComponent } from './config-intervalo/config-intervalo.component';
import { ConfigUltimosMinutosComponent } from './config-ultimos-minutos/config-ultimos-minutos.component';
import { ConfigPeticionComponent } from './config-peticion/config-peticion.component';
import { ConfigFechaInicioComponent } from './config-fecha-inicio/config-fecha-inicio.component';
import { ConfigFechaFinalComponent } from './config-fecha-final/config-fecha-final.component';
import { ConfigLineasComponent } from './config-lineas/config-lineas.component';
import { ConfigLlamadaComponent } from './config-llamada/config-llamada.component';
import { ConfigGroupByComponent } from './config-group-by/config-group-by.component';
import { ConfigResultadoLlamadaComponent } from './config-resultado-llamada/config-resultado-llamada.component';



@NgModule({
  imports: [
    CommonModule,
    ConfigRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgSelectModule,
    NowModule,
    NgbModule,

  ],
  declarations: [
    ConfigComponent,
    ConfigIntroComponent,
    ConfigClienteComponent,
    ConfigColaComponent,
    ConfigServicioComponent,
    ConfigCampanaComponent,
    ConfigSupervisorComponent,
    ConfigSuplenteComponent,
    ConfigAgenteComponent,
    ConfigHorarioComponent,
    ConfigTipoComponent,
    ConfigModoComponent,
    ConfigHoraInicioComponent,
    ConfigHoraFinalComponent,
    ConfigIntervaloComponent,
    ConfigUltimosMinutosComponent,
    ConfigPeticionComponent,
    ConfigFechaInicioComponent,
    ConfigFechaFinalComponent,
    ConfigLineasComponent,
    ConfigLlamadaComponent,
    ConfigGroupByComponent,
    ConfigResultadoLlamadaComponent,
  ],
  exports: [

    ConfigComponent,
    ConfigIntroComponent,
    ConfigClienteComponent,
    ConfigColaComponent,
    ConfigServicioComponent,
    ConfigCampanaComponent,
    ConfigSupervisorComponent,
    ConfigSuplenteComponent,
    ConfigAgenteComponent,
    ConfigHorarioComponent,
    ConfigTipoComponent,
    ConfigModoComponent,
    ConfigHoraInicioComponent,
    ConfigHoraFinalComponent,
    ConfigIntervaloComponent,
    ConfigUltimosMinutosComponent,
    ConfigPeticionComponent,
    ConfigFechaInicioComponent,
    ConfigFechaFinalComponent,
    ConfigLineasComponent,
    ConfigLlamadaComponent,
    ConfigGroupByComponent,
    ConfigResultadoLlamadaComponent,
    ]
})
export class ConfigModule { }
