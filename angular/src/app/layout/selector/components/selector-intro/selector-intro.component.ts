import { Component, OnInit } from '@angular/core';

import { UserSelection } from '../../../../shared/models/filter/Selection';

import { MenuService } from 'src/app/shared/services/filter/menu.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AlertModel } from 'src/app/shared/models/Alert';


@Component({
  selector: 'app-selector-intro',
  templateUrl: './selector-intro.component.html',
  styleUrls: ['./selector-intro.component.scss']
})
export class SelectorIntroComponent implements OnInit {

  menuOptions;
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


   this.getMenuRecords();




    this.menuOptions = {
      title: 'Titulo original de la consulta',
      subtitle: 'Subtitulo cambia dinamicamente',
      groupBy: 'campo_grupo',
      orderBy: 'cambpo_orden',
      limitBy: 'campo_limite',

      start_date: new Date,
      end_date: new Date,
      start_time: '',
      end_time: '',
      interval: [
        {menu_interval_id: 1, menu_interval_name: '60 minutos'},
        {menu_interval_id: 2, menu_interval_name: '20 minutos'},
        {menu_interval_id: 3, menu_interval_name: '130 minutos'}
      ],
      lines: [
        {menu_lines_id: 1, menu_lines_name: 'Linea 1'},
        {menu_lines_id: 2, menu_lines_name: 'Linea 2'},
        {menu_lines_id: 3, menu_lines_name: 'Linea 3'}
      ],

    };

    this.example = {
      // iMPORTED
      agent: [
        {menu_agent_id: 1, menu_agent_name: 'Jorge'},
        {menu_agent_id: 2, menu_agent_name: 'Luis'},
        {menu_agent_id: 3, menu_agent_name: 'Sara'}
      ],
      break: [
        {menu_break_id: 4, menu_break_name: 'Baño'},
        {menu_break_id: 5, menu_break_name: 'Almuerzo'},
        {menu_break_id: 6, menu_break_name: 'Permiso'}
      ],
      campaign: [
        {menu_campaign_id: 7, menu_campaign_name: 'Campaña 1'},
        {menu_campaign_id: 8, menu_campaign_name: 'Campaña 2'},
        {menu_campaign_id: 9, menu_campaign_name: 'Campaña 3'}
      ],
      client:  [
        {menu_client_id: 1, menu_client_name: 'Cliente 1'},
        {menu_client_id: 2, menu_client_name: 'Cliente 2'},
        {menu_client_id: 3, menu_client_name: 'Cliente 3'}
      ],
      queue: [
        {menu_queue_id: 1, menu_queue_name: 'Cola 1'},
        {menu_queue_id: 2, menu_queue_name: 'Cola 2'},
        {menu_queue_id: 3, menu_queue_name: 'Cola 3'}
      ],
      schedule: [
        {menu_schedule_id: 1, menu_schedule_name: 'Diurno'},
        {menu_schedule_id: 2, menu_schedule_name: 'Mediodia'},
        {menu_schedule_id: 3, menu_schedule_name: 'Nocturno'}
      ],
      scale: [
        {menu_scale_id: 1, menu_scale_name: 'Escala 1'},
        {menu_scale_id: 2, menu_scale_name: 'Escala 2'},
        {menu_scale_id: 3, menu_scale_name: 'Escala 3'}
      ],
      service: [
        {menu_service_id: 1, menu_service_name: 'Servicios 1'},
        {menu_service_id: 2, menu_service_name: 'Servicios 2'},
        {menu_service_id: 3, menu_service_name: 'Servicios 3'}
      ],
      substitute: [
        {menu_substitute_id: 1, menu_substitute_name: 'Suplentes 1'},
        {menu_substitute_id: 2, menu_substitute_name: 'Suplentes 2'},
        {menu_substitute_id: 3, menu_substitute_name: 'Suplentes 3'}
      ],
      supervisor: [
        {menu_supervisor_id: 1, menu_supervisor_name: 'Jorge'},
        {menu_supervisor_id: 2, menu_supervisor_name: 'Luis'},
        {menu_supervisor_id: 3, menu_supervisor_name: 'Sara'}
      ]
    };

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
