import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { FormBuilder } from '@angular/forms';

import { SelectionConfig,   } from './../../../shared/models';

import { createTitles } from './../../../shared/functions';

import { MenuService, PeticionService } from '../../../shared/services';

@Component({
  selector: 'app-config-campana',
  templateUrl: './config-campana.component.html',
  styleUrls: ['./config-campana.component.scss']
})
export class ConfigCampanaComponent implements OnInit {

  @Input() selection: SelectionConfig;

  @Input() options: SelectionConfig;
  @Output() valueChange = new EventEmitter();

  message;


  constructor(
    private fb: FormBuilder,
    private menuService: MenuService,
    private peticionService: PeticionService

  ) {
    this.selection = new SelectionConfig;


   }

  ngOnInit() {

  }

  onChange() {
    this.selection.titles = createTitles(this.selection);
    this.valueChange.emit(this.selection.agentes);
  }



}
