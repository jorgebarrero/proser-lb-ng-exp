import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { FormBuilder } from '@angular/forms';

import { createTitles } from './../../../shared/functions';

import { SelectionConfig,   } from './../../../shared/models';

import { MenuService, PeticionService } from '../../../shared/services';



@Component({
  selector: 'app-config-cliente',
  templateUrl: './config-cliente.component.html',
  styleUrls: ['./config-cliente.component.scss']
})
export class ConfigClienteComponent implements OnInit {

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
    this.valueChange.emit(this.selection.clientes);
  }


}
