
import { Component, OnInit, OnDestroy } from '@angular/core';

import { SelectionConfig,  } from './../../../../shared/models/';

import { datePickerFormatDate, createSubTitles } from './../../../../shared/functions';

import { MenuService } from './../../../../shared/services';



@Component({
  selector: 'app-manual-diario-config',
  templateUrl: './manual-diario-config.component.html',
  styleUrls: ['./manual-diario-config.component.scss']
})
export class ManualDiarioConfigComponent implements OnInit, OnDestroy {


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

    let storedSelection = this.proser_store.manual_diario.selection;

    let storedOptions = this.proser_store.manual_diario.options;

    if (storedSelection) {
      this.selection = this.proser_store.manual_diario.selection;
    }

    if (storedOptions) {
      this.options = this.proser_store.manual_diario.options;
    }


  }

  ngOnInit() {

    this.getMenu_multiple(this.selection);

  }

  ngOnDestroy() {

    this.proser_store.manual_diario.selection = this.selection;
    this.proser_store.manual_diario.options = this.options;
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
                console.log('data_menu', data);

                createSubTitles(this.selection);
              }
            },
          err => {
              this.message = 'Conexión no disponible';
          }
       );

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
