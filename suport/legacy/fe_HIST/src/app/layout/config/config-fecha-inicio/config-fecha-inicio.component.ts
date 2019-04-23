import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import {FormBuilder} from '@angular/forms';

import { SelectionConfig,  } from './../../../shared/models';


import { datePickerToDate, datePickerToText, dateToDatePicker } from './../../../shared/functions';

import { MenuService, PeticionService } from '../../../shared/services';

@Component({
  selector: 'app-config-fecha-inicio',
  templateUrl: './config-fecha-inicio.component.html',
  styleUrls: ['./config-fecha-inicio.component.scss']
})
export class ConfigFechaInicioComponent implements OnInit {

  @Input() selection: SelectionConfig;

  @Output() valueChange = new EventEmitter();

  message;

  options;

  constructor(
    private fb: FormBuilder,
    private menuService: MenuService,
    private peticionService: PeticionService

  ) {
    this.selection = new SelectionConfig;
    this.options = new SelectionConfig;

    this.options.fecha_inicio = [];
    this.selection.fecha_inicio = [];


   }

  ngOnInit() {

  }

  onChange() {

    let hoy = new Date();

    if (this.selection.fecha_inicio == null) {
      this.selection.fecha_inicio = dateToDatePicker(hoy);
    }


    this.selection.desde = datePickerToDate(this.selection.fecha_inicio);
    this.selection.date_text_inicio = datePickerToText(this.selection.fecha_inicio);

    this.selection.fecha_final = this.selection.fecha_inicio;
    this.selection.hasta = datePickerToDate(this.selection.fecha_inicio);
    this.selection.date_text_final = datePickerToText(this.selection.fecha_inicio);


    this.getMenu_multiple(this.selection);

  }


  getMenu_multiple(consultas_SQL?) {
    // console.log('MENU', consultas_SQL );
      this.menuService.getMenu_multiple(consultas_SQL)
      .subscribe(
          data => {
           // console.log('DATA MENU MULTIPLE', data);
              if (data ) {
                this.options = data;
                this.valueChange.emit(this.options);
                // this.records = data;
               // console.log('options', this.options);

              }
            },
          err => {
              // console.log('error de lectura', err, err.ok);
              this.message = 'Conexión no disponible';
          }
       );

  }





}
