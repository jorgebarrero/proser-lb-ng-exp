import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { FormBuilder } from '@angular/forms';

import { SelectionConfig } from 'src/app/shared/models/filter';
import { createTitles } from 'src/app/shared/functions/titles-peticion';

import { MenuService, PeticionService } from '.src/app/shared/services';


@Component({
  selector: 'app-config-group-by',
  templateUrl: './config-group-by.component.html',
  styleUrls: ['./config-group-by.component.scss']
})
export class ConfigGroupByComponent implements OnInit {

  @Input() selection: SelectionConfig;

  @Output() valueChange = new EventEmitter();

  message;

  options;

  myGroup;

  constructor(
    private fb: FormBuilder,
    private menuService: MenuService,
    private peticionService: PeticionService

  ) {
    this.selection = new SelectionConfig;
    this.options = new SelectionConfig;
    this.myGroup = new Group;

    this.options.group = this.myGroup.theGroup;
    this.selection.group = [];


   }

  ngOnInit() {

  }

  onChange() {
    this.selection.titles = createTitles(this.selection);
    this.valueChange.emit(this.selection.group);

  }


}
