import { Component, OnInit } from '@angular/core';

import { UserSelection } from '../../../../shared/models/filter/Selection';

import { MenuService } from 'src/app/shared/services/filter/menu.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AlertModel } from 'src/app/shared/models/Alert';
import { MenuOptions } from 'src/app/shared/models/filter/MenuOptions';



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

   this.getMenuRecords();

    // localStorage.setItem('menuOptions', JSON.stringify(this.menuOptions));

  }


  async getMenuRecords() {
    const query = {
        'start_date': '\'2019-04-25\'',
        'end_date': '\'2019-04-26\''
        };

    this.menuService.getMenuOptionRecords(query)
    .subscribe( data => {
      console.log('Hola', data);

      const newData = data;
      // const newData = JSON.parse(data);
      console.log('NEW DATA', newData);

      this.menuOptions.client = newData.client;
      this.menuOptions.queue = newData.queue;
      this.menuOptions.service = newData.service;
      this.menuOptions.campaign = newData.campaign;
      this.menuOptions.supervisor = newData.supervisor;
      this.menuOptions.agent = newData.agent;
      this.menuOptions.schedule = newData.schedule;
      this.menuOptions.auxiliar = newData.auxiliar;
      this.menuOptions.asignation = newData.asignation;

      localStorage.setItem('menuOptions', JSON.stringify(this.menuOptions));
      console.log('MENU OPTIONS', this.menuOptions);
      if (data) {
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




}
