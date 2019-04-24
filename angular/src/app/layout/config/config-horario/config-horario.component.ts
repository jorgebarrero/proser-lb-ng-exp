import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { FormBuilder } from '@angular/forms';

import { SelectionConfig, Hours} from 'src/app/shared/models';
import { createTitles, createSubTitles } from 'src/app/shared/functions/titles-peticion';

import { MenuService, PeticionService } from 'src/app/shared/services';

@Component({
  selector: 'app-config-horario',
  templateUrl: './config-horario.component.html',
  styleUrls: ['./config-horario.component.scss']
})
export class ConfigHorarioComponent implements OnInit {

  @Input() selection: SelectionConfig;

  @Input() options: SelectionConfig;
  @Output() valueChange = new EventEmitter();

  message;

  data_menu;

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
