import { Component, OnInit } from '@angular/core';

import { UserSelection } from '../../../../shared/models/filter/Selection';

import { MenuService } from 'src/app/shared/services/filter/menu.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AlertModel } from 'src/app/shared/models/Alert';
import { MenuOptions } from 'src/app/shared/models/filter/MenuOptions';
import * as moment from 'moment';

import {  createTitles, createSubTitles } from 'src/app/shared/functions/titles-peticion';


@Component({
  selector: 'app-selector-intro',
  templateUrl: './selector-intro.component.html',
  styleUrls: ['./selector-intro.component.scss']
})
export class SelectorIntroComponent implements OnInit {

  menuOptions = new MenuOptions;
  menuList;
  example;
  auxiliar = null;
  alertMessage = new AlertModel;
  userSelection = new UserSelection;

  constructor(
    private menuService: MenuService,
    private alertService: AlertService,
    private router: Router
    ) {

    }


  ngOnInit() {

    this.alertMessage = {
      alertTitle: 'Conectando con el servidor',
      alertText: 'Tenga paciencia que la conexión está lenta.',
      alertShow: true,
      alertClass: 'alert alert-success alert-dismissible fade show',
    };

  this.onDateChange();

   this.getMenuRecords();

    this.userSelection.title = 'Llamadas entrantes';
    this.userSelection.subtitle = createSubTitles(this.userSelection);

    // localStorage.setItem('menuOptions', JSON.stringify(this.menuOptions));

  }


  async getMenuRecords() {
    const query = this.onDateChange();

    this.menuService.getMenuOptionRecords(query)
    .subscribe( data => {
      if (data) {
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
      // console.log('MENU OPTIONS', this.menuOptions);
        this.auxiliar = true;
      }
    },
     error => {
            console.log('upps, error ');
            this.alertMessage = {
              alertTitle: 'Error del servidor',
              alertText: 'No hay conexión con el servidor, revise si el backend esta funcionando, o la conexion a internet está activa.',
              alertShow: true,
              alertClass: 'alert alert-danger alert-dismissible fade show',
            }


            ;
          }
        );

  }


  onDateChange() {
    const userSelection = JSON.parse(localStorage.getItem('userSelection'));
    const today = moment(new Date).format( 'YYYY-MM-DD');
    let newDate;

    if ( userSelection.start_date && userSelection.end_date) {

    newDate = {
        'start_date': `'${userSelection.start_date}'`,
        'end_date': `'${userSelection.end_date}'`,
    };
    } else {
      newDate = {
        'start_date': `'${today}'`,
        'end_date': `'${today}'`,
    };
    userSelection.start_date = today;
    userSelection.end_date = today;
    }
    // console.log('newDate', newDate);
    return newDate;
  }

  // onReport(){
  //   this.router.navigate(['/llamadas entrantes']);
  // }
}
