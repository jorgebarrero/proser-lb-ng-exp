
import {formatDate } from '../../functions/dates';
export class MenuOptions {
  title;
  subtitle;
  filterTitle;
  groupBy;
  orderBy;
  limitBy;

  start_date;
  end_date;
  start_time;
  end_time;
  interval;
  lines;

  client;
  queue;
  service;
  campaign;
  supervisor;
  agent;
  schedule;
  scale;
  auxiliar;
  asignation;
  login;
  last_minutes;
  today;

  constructor() {
    this.title = 'Titulo original de la consulta';
    this.subtitle = 'Subtitulo cambia dinamicamente';
    this.groupBy = '';
    this.orderBy = '';
    this.limitBy = '';

    this.today = formatDate(new Date);
    this.start_date = '';
    this.end_date = '';
    this.start_time = (new Hour).hour;
    this.end_time = (new Hour).hour;
    this.interval = (new Interval).interval;
    this.lines = (new Lines).lines;
    this.scale = (new Scale).scale;
  }
}


export class Lines {
  lines = [
    {menu_lines_id: 1, menu_lines_name: '1 línea'},
    {menu_lines_id: 5, menu_lines_name: '5 líneas'},
    {menu_lines_id: 10, menu_lines_name: '10 líneas'},
    {menu_lines_id: 15, menu_lines_name: '15 líneas'},
    {menu_lines_id: 20, menu_lines_name: '20 líneas'},
    {menu_lines_id: 25, menu_lines_name: '25 líneas'},
    {menu_lines_id: 30, menu_lines_name: '30 líneas'},
    {menu_lines_id: 35, menu_lines_name: '35 líneas'},
    {menu_lines_id: 40, menu_lines_name: '40 líneas'},
    {menu_lines_id: 45, menu_lines_name: '45 líneas'},
    {menu_lines_id: 50, menu_lines_name: '50 líneas'},
    {menu_lines_id: 55, menu_lines_name: '55 líneas'},
    {menu_lines_id: 60, menu_lines_name: '60 líneas'},
];
}


export class Interval {
  interval = [
      {menu_interval_id: 1, menu_interval_name: '1 min', value: '1' },
      {menu_interval_id: 5, menu_interval_name: '5 min', value: '5'},
      {menu_interval_id: 10, menu_interval_name: '10 min', value: '10'},
      {menu_interval_id: 15, menu_interval_name: '15 min', value: '15'},
      {menu_interval_id: 20, menu_interval_name: '20 min', value: '20'},
      {menu_interval_id: 25, menu_interval_name: '25 min', value: '25'},
      {menu_interval_id: 30, menu_interval_name: '30 min', value: '30'},
      {menu_interval_id: 35, menu_interval_name: '35 min', value: '35'},
      {menu_interval_id: 40, menu_interval_name: '40 min', value: '40'},
      {menu_interval_id: 45, menu_interval_name: '45 min', value: '41'},
      {menu_interval_id: 50, menu_interval_name: '50 min', value: '50'},
      {menu_interval_id: 55, menu_interval_name: '55 min', value: '55'},
      {menu_interval_id: 60, menu_interval_name: '60 min', value: '60'},
      {menu_interval_id: 120, menu_interval_name: '120 min', value: '120'},
  ];
}

export class Scale {
  scale = [
      {menu_scale_id: 1, menu_scale_name: 'Normal' },
      {menu_scale_id: 2, menu_scale_name: 'Especial' },

  ];
}


export class Hour {

  hour = [
    {menu_hour_id: 0, menu_hour_name: '00:00:00'},
    {menu_hour_id: 1, menu_hour_name: '01:00:00'},
    {menu_hour_id: 2, menu_hour_name: '02:00:00'},
    {menu_hour_id: 3, menu_hour_name:  '03:00:00'},
    {menu_hour_id: 4, menu_hour_name:  '04:00:00'},
    {menu_hour_id: 5, menu_hour_name:  '05:00:00'},
    {menu_hour_id: 6, menu_hour_name:  '06:00:00'},
    {menu_hour_id: 7, menu_hour_name:  '07:00:00'},
    {menu_hour_id: 8, menu_hour_name:  '08:00:00'},
    {menu_hour_id: 9, menu_hour_name:  '09:00:00'},
    {menu_hour_id: 10, menu_hour_name:  '10:00:00'},
    {menu_hour_id: 11, menu_hour_name:  '11:00:00'},
    {menu_hour_id: 12, menu_hour_name:  '12:00:00'},
    {menu_hour_id: 13, menu_hour_name: '13:00:00'},
    {menu_hour_id: 14, menu_hour_name:  '14:00:00'},
    {menu_hour_id: 15, menu_hour_name:  '15:00:00'},
    {menu_hour_id: 16, menu_hour_name:  '16:00:00'},
    {menu_hour_id: 17, menu_hour_name:  '17:00:00'},
    {menu_hour_id: 18, menu_hour_name:  '18:00:00'},
    {menu_hour_id: 19, menu_hour_name:  '19:00:00'},
    {menu_hour_id: 20, menu_hour_name:  '20:00:00'},
    {menu_hour_id: 21, menu_hour_name:  '21:00:00'},
    {menu_hour_id: 22, menu_hour_name:  '22:00:00'},
    {menu_hour_id: 23, menu_hour_name:  '23:00:00'},
    {menu_hour_id: 24, menu_hour_name: '24:00:00'},
  ];

 }
