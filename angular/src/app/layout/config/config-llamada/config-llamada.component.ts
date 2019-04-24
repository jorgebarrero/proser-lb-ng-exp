import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { FormBuilder} from '@angular/forms';



import { SelectionConfig, Hours, Interval, Lineas, Llamada} from 'src/app/shared/models/filter';
import { createTitles, createSubTitles, createIntervalTitles} from 'src/app/shared/functions/titles-peticion';


import { MenuService, PeticionService } from '.src/app/shared/services';

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
