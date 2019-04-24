import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { FormBuilder } from '@angular/forms';

import { SelectionConfig, Hours} from 'src/app/shared/models';
import { createTitles, createSubTitles } from 'src/app/shared/functions/titles-peticion';

import { MenuService, PeticionService } from 'src/app/shared/services';

@Component({
  selector: 'app-config-hora-inicio',
  templateUrl: './config-hora-inicio.component.html',
  styleUrls: ['./config-hora-inicio.component.scss']
})
export class ConfigHoraInicioComponent implements OnInit {

  @Input() selection: SelectionConfig;

  @Output() valueChange = new EventEmitter();
  message;

  options;

  myHour;

  constructor(
    private fb: FormBuilder,
    private menuService: MenuService,
    private peticionService: PeticionService

  ) {

    this.selection = new SelectionConfig;
    this.options = new SelectionConfig;
    this.myHour = new Hours;

    this.options.hora_inicio = this.myHour.theHours;

    this.selection.hora_inicio = [];

   }

  ngOnInit() {

  }

  onChange() {
        // console.log(this.selection.hora_inicio);

        if (this.selection.hora_inicio == null) {
          this.selection.hora_inicio = {id: 0, name: '0:00', value: 0, hour: '00:00:00'};
        }

    this.selection.subtitles = createSubTitles(this.selection);
    this.valueChange.emit(this.selection.hora_inicio);

  }


}
