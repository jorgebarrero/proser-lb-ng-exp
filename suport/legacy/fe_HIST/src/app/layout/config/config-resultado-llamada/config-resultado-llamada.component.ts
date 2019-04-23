import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { FormBuilder } from '@angular/forms';

import { SelectionConfig, ResultadoLlamada,   } from './../../../shared/models';


import { createSubTitles } from './../../../shared/functions';

import { MenuService, PeticionService } from '../../../shared/services';


@Component({
  selector: 'app-config-resultado-llamada',
  templateUrl: './config-resultado-llamada.component.html',
  styleUrls: ['./config-resultado-llamada.component.scss']
})
export class ConfigResultadoLlamadaComponent implements OnInit {

  @Input() selection: SelectionConfig;

  @Output() valueChange = new EventEmitter();

  message;

  options;

  myLlamada;

  constructor(
    private fb: FormBuilder,
    private menuService: MenuService,
    private peticionService: PeticionService

  ) {
    this.selection = new SelectionConfig;
    this.options = new SelectionConfig;
    this.myLlamada = new ResultadoLlamada;

    this.options.resultado_llamada = this.myLlamada.theLlamada;
    this.selection.resultado_llamada = [];


   }

  ngOnInit() {

  }

  onChange() {

    this.selection.subtitles = createSubTitles(this.selection);
    this.valueChange.emit(this.selection.resultado_llamada);

  }

}
