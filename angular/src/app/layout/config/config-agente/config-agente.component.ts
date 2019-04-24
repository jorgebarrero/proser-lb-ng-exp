import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { FormBuilder } from '@angular/forms';

// import { SelectionConfig,   } from './../../../shared/models';
// import { createTitles } from './../../../shared/functions';

import { MenuService, PeticionService } from 'src/app/shared/services';

import { SelectionConfig } from 'src/app/shared/models';
import { createTitles } from 'src/app/shared/functions/titles-peticion';



@Component({
  selector: 'app-config-agente',
  templateUrl: './config-agente.component.html',
  styleUrls: ['./config-agente.component.scss']
})
export class ConfigAgenteComponent implements OnInit {

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
