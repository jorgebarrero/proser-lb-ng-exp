import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { FormBuilder } from '@angular/forms';

import { SelectionConfig } from 'src/app/shared/models/filter';
import { createTitles } from 'src/app/shared/functions/titles-peticion';

import { MenuService, PeticionService } from '.src/app/shared/services';

@Component({
  selector: 'app-config-cola',
  templateUrl: './config-cola.component.html',
  styleUrls: ['./config-cola.component.scss']
})
export class ConfigColaComponent implements OnInit {

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
