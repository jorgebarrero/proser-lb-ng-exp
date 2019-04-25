import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { FormBuilder } from '@angular/forms';

import { SelectionConfig, Type,  } from './../../../shared/models';

import { createSubTitles } from './../../../shared/functions';

import { MenuService, PeticionService } from '../../../shared/services';

@Component({
  selector: 'app-config-tipo',
  templateUrl: './config-tipo.component.html',
  styleUrls: ['./config-tipo.component.scss']
})
export class ConfigTipoComponent implements OnInit {

  @Input() selection: SelectionConfig;

  @Output() valueChange = new EventEmitter();

  message;

  options;

  myType;

  constructor(
    private fb: FormBuilder,
    private menuService: MenuService,
    private peticionService: PeticionService

  ) {
    this.selection = new SelectionConfig;
    this.options = new SelectionConfig;
    this.myType = new Type;

    this.options.type = this.myType.theTypes;

    this.selection.type = [];


   }

  ngOnInit() {

  }

  onChange() {
    this.selection.subtitles = createSubTitles(this.selection);
    this.valueChange.emit(this.selection.type);

  }


}
