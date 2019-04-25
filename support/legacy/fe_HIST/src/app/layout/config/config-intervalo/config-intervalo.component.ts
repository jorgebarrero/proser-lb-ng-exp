import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { FormBuilder } from '@angular/forms';

import { SelectionConfig, Interval,   } from './../../../shared/models';

import { createSubTitles, createIntervalTitles } from './../../../shared/functions';

import { MenuService, PeticionService } from '../../../shared/services';

@Component({
  selector: 'app-config-intervalo',
  templateUrl: './config-intervalo.component.html',
  styleUrls: ['./config-intervalo.component.scss']
})
export class ConfigIntervaloComponent implements OnInit {

  @Input() selection: SelectionConfig;

  @Output() valueChange = new EventEmitter();

  message;

  options;

  myInterval;

  constructor(
    private fb: FormBuilder,
    private menuService: MenuService,
    private peticionService: PeticionService

  ) {
    this.selection = new SelectionConfig;
    this.options = new SelectionConfig;
    this.myInterval = new Interval;

    this.options.minutos_intervalo = this.myInterval.theInterval;


   }

  ngOnInit() {

  }

  onChange() {

    if (this.selection.minutos_intervalo == null) {
      this.selection.minutos_intervalo = {id: 60, name: '60 min', value: 60};
    }


    this.selection.subtitles = createSubTitles(this.selection);
    this.selection.subtitles = createIntervalTitles(this.selection, this.selection.subtitles);

    this.valueChange.emit(this.selection.minutos_intervalo);
  }

}
