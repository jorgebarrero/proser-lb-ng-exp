import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { FormBuilder } from '@angular/forms';

import { SelectionConfig } from 'src/app/shared/models/filter';
import { createTitles } from 'src/app/shared/functions/titles-peticion';

import { datePickerToDate, datePickerToText, dateToDatePicker } from 'src/app/shared/functions/dates';

import { MenuService, PeticionService } from '.src/app/shared/services';
import { datePickerToDate } from 'src/app/shared/functions/dates';



@Component({
  selector: 'app-config-fecha-final',
  templateUrl: './config-fecha-final.component.html',
  styleUrls: ['./config-fecha-final.component.scss']
})
export class ConfigFechaFinalComponent implements OnInit {

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

    this.options.fecha_final = [];
    this.selection.fecha_final = [];


   }

  ngOnInit() {
      //   this.getMenu_date_text(this.consultas_SQL);
  }

  onChange() {

    const hoy = new Date();

    if (this.selection.fecha_final == null) {
      this.selection.fecha_final = dateToDatePicker(hoy);
    }

    this.selection.hasta = datePickerToDate(this.selection.fecha_final);
    this.selection.date_text_final = datePickerToText(this.selection.fecha_final);

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
             //  console.log('error de lectura', err, err.ok);
              this.message = 'Conexión no disponible';
          }
       );

  }
}
