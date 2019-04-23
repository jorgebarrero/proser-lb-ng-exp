
import { Component, OnInit, OnDestroy } from '@angular/core';

import { SelectionConfig,  } from './../../../../shared/models/';

import { datePickerFormatDate,  } from './../../../../shared/functions';

import { MenuService } from './../../../../shared/services';

@Component({
  selector: 'app-conexion-desconexion-config',
  templateUrl: './conexion-desconexion-config.component.html',
  styleUrls: ['./conexion-desconexion-config.component.scss']
})
export class ConexionDesconexionConfigComponent implements OnInit, OnDestroy {


  currentUser;
  message;
  records;

  selection;
  filter;
  options;
  proser_store;

  today;
  now;

  constructor(
    private menuService: MenuService,
  ) {

    this.message = 'Conectando con el servidor';

     this.selection = new SelectionConfig;
     this.options = new SelectionConfig;


    this.proser_store = JSON.parse(localStorage.getItem('proser_store'));


    let storedSelection = this.proser_store.conexion_desconexion.selection;

    let storedOptions = this.proser_store.conexion_desconexion.options;

    if (storedSelection) {
      this.selection = this.proser_store.conexion_desconexion.selection;
    }


    if (storedOptions) {
      this.options = this.proser_store.conexion_desconexion.options;
    }



    /******************************************* */
    this.now = new Date();
    this.today = {
      year: this.now.getFullYear(),
      month: this.now.getMonth() + 1,
      day: this.now.getDate()
    };

    // this.onMismoDia();

  }

  ngOnInit() {

    this.getMenu_multiple(this.selection);


  }

  ngOnDestroy() {

    // this.onMismoDia();
    this.proser_store.conexion_desconexion.selection = this.selection;
    this.proser_store.conexion_desconexion.options = this.options;

    localStorage.setItem('proser_store', JSON.stringify(this.proser_store));

  }



  /***************************************************** */


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
