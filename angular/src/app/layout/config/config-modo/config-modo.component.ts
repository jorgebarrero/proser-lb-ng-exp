import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { FormBuilder } from '@angular/forms';

import { SelectionConfig, Hours, Interval, Lineas, Llamada, Mode} from 'src/app/shared/models/filter';
import { createTitles, createSubTitles, createIntervalTitles} from 'src/app/shared/functions/titles-peticion';



import { MenuService, PeticionService } from '.src/app/shared/services';

@Component({
  selector: 'app-config-modo',
  templateUrl: './config-modo.component.html',
  styleUrls: ['./config-modo.component.scss']
})
export class ConfigModoComponent implements OnInit {

  @Input() selection: SelectionConfig;

  @Output() valueChange = new EventEmitter();

  message;

  options;

  myMode;

  constructor(
    private fb: FormBuilder,
    private menuService: MenuService,
    private peticionService: PeticionService

  ) {
    this.selection = new SelectionConfig;
    this.options = new SelectionConfig;
    this.myMode = new Mode;

    this.options.mode = this.myMode.theModes;

    this.selection.mode = [];


   }

  ngOnInit() {
       //  this.getMenu_mode(this.consultas_SQL);
  }

  onChange() {

    this.selection.subtitles = createSubTitles(this.selection);
    this.valueChange.emit(this.selection.mode);

  }



}
