import { Component, OnInit, OnDestroy } from '@angular/core';

import { UserSelection } from '../../../../shared/models/filter/Selection';

import { MenuService } from 'src/app/shared/services/filter/menu.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AlertModel } from 'src/app/shared/models/Alert';
import { MenuOptions } from 'src/app/shared/models/filter/MenuOptions';
import * as moment from 'moment';
import { formatDate } from 'src/app/shared/functions/dates';

import {  createSubTitles, createFilterTitles } from 'src/app/shared/functions/titles-peticion';


@Component({
  selector: 'app-selector-intro',
  templateUrl: './selector-intro.component.html',
  styleUrls: ['./selector-intro.component.scss']
})
export class SelectorIntroComponent implements OnInit, OnDestroy {

  menuOptions = new MenuOptions;
  userSelection = new UserSelection;
  storedVariable = 'userSelection'
  menuList;
  example;

  alertMessage = new AlertModel;
  fieldUpdated;
  show = false;
  auxiliar = null;
  
  constructor(
    private menuService: MenuService,
    private alertService: AlertService,
    private router: Router
    ) {

      this.alertMessage = {
        alertTitle: 'Conectando con el servidor',
        alertText: 'Tenga paciencia que la conexión está lenta.',
        alertShow: true,
        alertClass: 'alert alert-success alert-dismissible fade show',
      };

    }


  ngOnInit() {
    let temp = JSON.parse(localStorage.getItem('userSelection'));

    if (!temp.start_date) {
          localStorage.setItem('userSelection', JSON.stringify(this.userSelection));
      } else {
          this.userSelection = JSON.parse(localStorage.getItem('userSelection'));
          this.show = true;
          this.auxiliar = true;
      }
  }

  ngOnDestroy() {
   
  }


  getMenuRecords( ) {
    this.show = false;

    const query = {
      // tslint:disable-next-line:quotemark
      "start_date": `'${this.userSelection.start_date}'`,
      // tslint:disable-next-line:quotemark
      "end_date": `'${this.userSelection.end_date}'`
      };

    this.menuService.getMenuOptionRecords(query)
    .subscribe( data => {

      data[0] ? this.show = true : this.show = false;

      if (data !== undefined) {
      this.menuOptions.client = data.client;
      this.menuOptions.queue = data.queue;
      this.menuOptions.service = data.service;
      this.menuOptions.campaign = data.campaign;
      this.menuOptions.supervisor = data.supervisor;
      this.menuOptions.agent = data.agent;
      this.menuOptions.schedule = data.schedule;
      this.menuOptions.auxiliar = data.auxiliar;
      this.menuOptions.asignation = data.asignation;

      localStorage.setItem('menuOptions', JSON.stringify(this.menuOptions));
      console.log('DATA', data);
      this.auxiliar = true;
      this.show = true;
      }
    },
     error => {
      console.log('upps, error ');
        this.alertMessage = {
          alertTitle: 'Error del servidor',
          alertText: 'No hay conexión con el servidor, revise si el backend esta funcionando, o la conexion a internet está activa.',
          alertShow: true,
          alertClass: 'alert alert-danger alert-dismissible fade show',
      };
    }
  );
  }


  onReceive(event){
    // console.log('event', event);
    
    eval( `this.${this.storedVariable}.${event.field} = event.value`)
    localStorage.setItem('userSelection', JSON.stringify(this.userSelection));
    // console.log('received', this.userSelection);
  }

  

}
