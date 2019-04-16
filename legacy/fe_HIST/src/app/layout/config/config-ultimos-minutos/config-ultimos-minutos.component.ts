import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { FormBuilder } from '@angular/forms';

import { SelectionConfig, Interval,  } from './../../../shared/models';

import { createSubTitles } from './../../../shared/functions';

import { MenuService, PeticionService } from '../../../shared/services';

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
