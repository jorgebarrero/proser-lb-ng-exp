import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { FormBuilder } from '@angular/forms';

import { SelectionConfig, Hours, Interval, Lineas, Llamada, Mode, Peticion, ResultadoLlamada, Type} from 'src/app/shared/models/filter';
import { createTitles, createSubTitles, createIntervalTitles} from 'src/app/shared/functions/titles-peticion';

import { MenuService, PeticionService } from '.src/app/shared/services';

@Component({
  selector: 'app-config-ultimos-minutos',
  templateUrl: './config-ultimos-minutos.component.html',
  styleUrls: ['./config-ultimos-minutos.component.scss']
})
export class ConfigUltimosMinutosComponent implements OnInit {

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

    this.options.ultimos_minutos = this.myInterval.theInterval;

    this.selection.ultimos_minutos = [];


   }

  ngOnInit() {

  }

  onChange() {
    this.selection.subtitles = createSubTitles(this.selection);
    this.valueChange.emit(this.selection.ultimos_minutos);

  }

}
