
import { Component, OnInit, OnDestroy } from '@angular/core';

import { SelectionConfig,  } from './../../../../shared/models/';


import { MenuService } from './../../../../shared/services';


@Component({
  selector: 'app-detalle-llamadas-config',
  templateUrl: './detalle-llamadas-config.component.html',
  styleUrls: ['./detalle-llamadas-config.component.scss']
})
export class DetalleLlamadasConfigComponent implements OnInit, OnDestroy {



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

    let storedSelection = this.proser_store.detalle_llamadas.selection;

    let storedOptions = this.proser_store.detalle_llamadas.options;

    if (storedSelection) {
      this.selection = this.proser_store.detalle_llamadas.selection;
    }

    if (storedOptions) {
      this.options = this.proser_store.detalle_llamadas.options;
    }

  }

  ngOnInit() {

    this.getMenu_multiple(this.selection);


  }

  ngOnDestroy() {

    // this.onMismoDia();
    this.proser_store.detalle_llamadas.selection = this.selection;
    this.proser_store.detalle_llamadas.options = this.options;

    localStorage.setItem('proser_store', JSON.stringify(this.proser_store));

  }



  getMenu_multiple(consultas_SQL?) {
    // console.log('MENU', consultas_SQL );
      this.menuService.getMenu_multiple(consultas_SQL)
      .subscribe(
          data => {
           // console.log('DATA MENU MULTIPLE', data);
              if (data ) {
                this.options = data;
                this.records = data;
               // console.log('options', this.options);

              }
            },
          err => {
              console.log('error de lectura', err, err.ok);
              this.message = 'Conexión no disponible';
          }
       );

  }

     /***************************************************** */



  seleccionFechaInicio( data_object ) {

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
  /************************************ */

  seleccionHoraInicio(data_object) {

  }

  seleccionHoraFinal(data_object) {

  }

  UltimosMinutos(data_object) {

  }



}
