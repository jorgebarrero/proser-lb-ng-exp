import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { FormBuilder } from '@angular/forms';

import { SelectionConfig, Hours, Interval, Lineas} from 'src/app/shared/models';
import { createTitles, createSubTitles, createIntervalTitles} from 'src/app/shared/functions/titles-peticion';

import { MenuService, PeticionService } from 'src/app/shared/services';

@Component({
  selector: 'app-config-lineas',
  templateUrl: './config-lineas.component.html',
  styleUrls: ['./config-lineas.component.scss']
})
export class ConfigLineasComponent implements OnInit {

  @Input() selection: SelectionConfig;

  @Output() valueChange = new EventEmitter();

  message;

  options;

  myLines;

  constructor(
    private fb: FormBuilder,
    private menuService: MenuService,
    private peticionService: PeticionService

  ) {
    this.selection = new SelectionConfig;
    this.options = new SelectionConfig;
    this.myLines = new Lineas;

    this.options.lineas = this.myLines.theLines;
    this.selection.lineas = [];


   }

  ngOnInit() {

  }

  onChange() {
    console.log(this.selection.lineas);

    if (this.selection.lineas == null) {
      this.selection.lineas = { 'id': 10, 'name': '10 línea' };
    }


    this.selection.subtitles = createSubTitles(this.selection);
    this.valueChange.emit(this.selection.lineas);

  }


}
