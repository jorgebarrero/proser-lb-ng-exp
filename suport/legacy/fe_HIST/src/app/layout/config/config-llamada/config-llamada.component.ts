import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { FormBuilder} from '@angular/forms';

import { SelectionConfig, Llamada,   } from './../../../shared/models';


import { createSubTitles } from './../../../shared/functions';

import { MenuService, PeticionService } from '../../../shared/services';

@Component({
  selector: 'app-config-llamada',
  templateUrl: './config-llamada.component.html',
  styleUrls: ['./config-llamada.component.scss']
})
export class ConfigLlamadaComponent implements OnInit {

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
    this.myLlamada = new Llamada;

    this.options.llamada_clasificacion = this.myLlamada.theLlamada;
    this.selection.llamada_clasificacion = [];


   }

  ngOnInit() {

  }

  onChange() {

    this.selection.subtitles = createSubTitles(this.selection);
    this.valueChange.emit(this.selection.llamada_clasificacion);

  }


}
