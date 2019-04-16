
import { Component, OnInit, OnDestroy } from '@angular/core';

import { SelectionConfig,  } from './../../../../shared/models/';

import { createSubTitles, createIntervalTitles } from './../../../../shared/functions';

import { MenuService } from './../../../../shared/services';


@Component({
  selector: 'app-entrante-intervalo-config',
  templateUrl: './entrante-intervalo-config.component.html',
  styleUrls: ['./entrante-intervalo-config.component.scss']
})
export class EntranteIntervaloConfigComponent implements OnInit, OnDestroy {


  currentUser;
  message;
  records;

  selection;

  options;
  proser_store;


  constructor(
    private menuService: MenuService,
  ) {

    this.message = 'Conectando con el servidor';

     this.selection = new SelectionConfig;
     this.options = new SelectionConfig;

    this.proser_store = JSON.parse(localStorage.getItem('proser_store'));

    let storedSelection = this.proser_store.entrante_intervalo.selection;

    let storedOptions = this.proser_store.entrante_intervalo.options;

    if (storedSelection) {
      this.selection = this.proser_store.entrante_intervalo.selection;
    }

    if (storedOptions) {
      this.options = this.proser_store.entrante_intervalo.options;
    }

  }

  ngOnInit() {

    this.getMenu_multiple(this.selection);

  }

  ngOnDestroy() {

    this.proser_store.entrante_intervalo.selection = this.selection;
    this.proser_store.entrante_intervalo.options = this.options;
    localStorage.setItem('proser_store', JSON.stringify(this.proser_store));

  }



  /***************************************************** */


  getMenu_multiple(consultas_SQL?) {

      this.menuService.getMenu_multiple(consultas_SQL)
      .subscribe(
          data => {
              if (data ) {
                this.options = data;
                this.records = data;
              }
            },
          err => {
              this.message = 'Conexión no disponible';
          }
       );

  }


  seleccionField(data_object) {

    this.selection.subtitles = createSubTitles(this.selection);
    this.selection.subtitles = createIntervalTitles(this.selection, this.selection.subtitles);

  }


seleccionFechaInicio(data_object) {


}

seleccionFechaFinal(data_object) {

}

seleccionClientes(data_object) {

}

seleccionColas(data_object) {

}

seleccionServicios(data_object) {

}

seleccionCampanas(data_object) {

}


seleccionSupervisores(data_object) {

}

seleccionSuplentes(data_object) {

}

seleccionAgentes(data_object) {

}

seleccionHorarios(data_object) {

}

seleccionHoraInicio(data_object) {

}

seleccionHoraFinal(data_object) {

}

UltimosMinutos(data_object) {

}

}
