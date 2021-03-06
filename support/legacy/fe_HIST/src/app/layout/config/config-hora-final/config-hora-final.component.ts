import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { FormBuilder } from '@angular/forms';

import { SelectionConfig, Hours,  } from './../../../shared/models';

import { createSubTitles } from './../../../shared/functions';

import { MenuService, PeticionService } from '../../../shared/services';

@Component({
  selector: 'app-config-hora-final',
  templateUrl: './config-hora-final.component.html',
  styleUrls: ['./config-hora-final.component.scss']
})
export class ConfigHoraFinalComponent implements OnInit {

  @Input() selection: SelectionConfig;

  @Output() valueChange = new EventEmitter();

  message;

  options;

  myHour;

  constructor(
    private fb: FormBuilder,
    private menuService: MenuService,
    private peticionService: PeticionService

  ) {
    this.selection = new SelectionConfig;
    this.options = new SelectionConfig;
    this.myHour = new Hours;

    this.options.hora_final = this.myHour.theHours;

    this.selection.hora_final = [];


   }

  ngOnInit() {

  }

  onChange() {

    // console.log(this.selection.hora_final);

    if (this.selection.hora_final == null) {
      this.selection.hora_final = {id: 24, name: '12:00 pm.', value: 1440, hour: '24:00:00'};
    }

    this.selection.subtitles = createSubTitles(this.selection);
    this.valueChange.emit(this.selection.hora_final);

  }

}
