import { Component, OnInit } from '@angular/core';

import { UserSelection } from '../../../../shared/models/filter/Selection';

import { MenuService } from 'src/app/shared/services/filter/menu.service';


@Component({
  selector: 'app-selector-intro',
  templateUrl: './selector-intro.component.html',
  styleUrls: ['./selector-intro.component.scss']
})
export class SelectorIntroComponent implements OnInit {

  menuOptions;
  menuList;
  example;

  constructor(
    private menuService: MenuService) {

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
        {inv_interval_id: 1, inv_interval_name: '60 minutos'},
        {inv_interval_id: 2, inv_interval_name: '20 minutos'},
        {inv_interval_id: 3, inv_interval_name: '130 minutos'}
      ],
      lines: [
        {inv_lines_id: 1, inv_lines_name: 'Linea 1'},
        {inv_lines_id: 2, inv_lines_name: 'Linea 2'},
        {inv_lines_id: 3, inv_lines_name: 'Linea 3'}
      ],

    };

    this.example = {
      // iMPORTED
      agent: [
        {inv_agent_id: 1, inv_agent_name: 'Jorge'},
        {inv_agent_id: 2, inv_agent_name: 'Luis'},
        {inv_agent_id: 3, inv_agent_name: 'Sara'}
      ],
      break: [
        {inv_break_id: 4, inv_break_name: 'Baño'},
        {inv_break_id: 5, inv_break_name: 'Almuerzo'},
        {inv_break_id: 6, inv_break_name: 'Permiso'}
      ],
      campaign: [
        {inv_campaign_id: 7, inv_campaign_name: 'Campaña 1'},
        {inv_campaign_id: 8, inv_campaign_name: 'Campaña 2'},
        {inv_campaign_id: 9, inv_campaign_name: 'Campaña 3'}
      ],
      client:  [
        {inv_client_id: 1, inv_client_name: 'Cliente 1'},
        {inv_client_id: 2, inv_client_name: 'Cliente 2'},
        {inv_client_id: 3, inv_client_name: 'Cliente 3'}
      ],
      queue: [
        {inv_queue_id: 1, inv_queue_name: 'Cola 1'},
        {inv_queue_id: 2, inv_queue_name: 'Cola 2'},
        {inv_queue_id: 3, inv_queue_name: 'Cola 3'}
      ],
      schedule: [
        {inv_schedule_id: 1, inv_schedule_name: 'Diurno'},
        {inv_schedule_id: 2, inv_schedule_name: 'Mediodia'},
        {inv_schedule_id: 3, inv_schedule_name: 'Nocturno'}
      ],
      scale: [
        {inv_scale_id: 1, inv_scale_name: 'Escala 1'},
        {inv_scale_id: 2, inv_scale_name: 'Escala 2'},
        {inv_scale_id: 3, inv_scale_name: 'Escala 3'}
      ],
      service: [
        {inv_service_id: 1, inv_service_name: 'Servicios 1'},
        {inv_service_id: 2, inv_service_name: 'Servicios 2'},
        {inv_service_id: 3, inv_service_name: 'Servicios 3'}
      ],
      substitute: [
        {inv_substitute_id: 1, inv_substitute_name: 'Suplentes 1'},
        {inv_substitute_id: 2, inv_substitute_name: 'Suplentes 2'},
        {inv_substitute_id: 3, inv_substitute_name: 'Suplentes 3'}
      ],
      supervisor: [
        {inv_supervisor_id: 1, inv_supervisor_name: 'Jorge'},
        {inv_supervisor_id: 2, inv_supervisor_name: 'Luis'},
        {inv_supervisor_id: 3, inv_supervisor_name: 'Sara'}
      ]
    };

    localStorage.setItem('menuOptions', JSON.stringify(this.menuOptions));

  }


  async getMenuRecords() {
    const query = {
        'start_date': '\'2019-01-25\'',
        'end_date': '\'2019-01-26\''
        };

    const temp = await this.menuService.getMenuOptionRecords(query);

    // .subscribe( data => {
    //   data === undefined ? this.menuList = 0 : this.menuList = 1;
    //   console.log('data', data);

          // }
        // );



     console.log('menu service', temp.agent);
     this.menuOptions.agent = temp.agent;
  }




}
