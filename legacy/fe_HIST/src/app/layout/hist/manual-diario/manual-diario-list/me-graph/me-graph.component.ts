

import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

import { BaseChartDirective } from 'ng2-charts/ng2-charts';

import { calcularEscalaGrafico, numToShortWeekDay } from './../../../../../shared/functions';


@Component({
  selector: 'app-me-graph',
  templateUrl: './me-graph.component.html',
  styleUrls: ['./me-graph.component.scss']
})
export class MeGraphComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  @Input() rows;
  @Input() rows_all;
  @Input() selection;

  @Output() valueChange = new EventEmitter();

  counter;

  data_del_grafico = [];
  data_abandonadas = [];
  data_atendidas = [];
  data_nivel_de_contactabilidad = [];
  data_titulos = [];

  stepinterval;

  barChartOptions;
  barChartLabels: string[];
  barChartColors: string[];
  barChartType: string;
  barChartLegend: boolean;
  barChartData: any[];

/*************************************************
 * VARIABLES DEL GRAFICO
 *
 */
dataEntrantes: Array<any> = [];


// bar chart
  constructor() {

   }

  ngOnInit() {

    this.crearGrafico();
  }



  crearGrafico() {

    let max_llamadas_realizadas = this.rows
    .map( x => {
      return   x.calc.llamadas_realizadas ? x.calc.llamadas_realizadas : null;
    })
    .reduce(function( max, cell) {
      return Math.max( max, cell);
     }, 0);

    if (this.rows) {

      this.stepinterval = calcularEscalaGrafico( max_llamadas_realizadas );
    }

console.log('max_llamadas_contestadas', max_llamadas_realizadas, this.stepinterval);


    this.barChartLabels = [
      'Gráfico de llamadas manuales por intervalos'
    ];

    this.barChartColors = ['#046edf'];

    this.barChartType = 'bar';
    this.barChartLegend = true;

    this.barChartData = [0];

    this.barChartOptions = {
      scaleShowVerticalLines: false,
      responsive: true,
      scales: {
          xAxes: [
            {
              position: 'top',
              scaleFontSize: 40,
              ticks: {
                fontSize: 16
            },
              stacked: true,
              scaleLabel: {
                  display: true,
                  labelString: 'Linea temporal por intervalos'
              }
          }],
          yAxes: [{
              id: 'A',
              type: 'linear',
              position: 'left',
              scalePositionLeft: true,
              scaleFontSize: 40,
              stacked: true,
              scaleLabel: {
                  display: true,
                  labelString: 'Cantidad de llamadas',
                  fontSize: 20
                  },
                  ticks: {
                      min: 0,
                      stepSize: this.stepinterval,
                      fontSize: 16
                  }
              },
              {
              id: 'B',
              type: 'linear',
              position: 'right',
              scalePositionLeft: false,
              stacked: true,
              scaleLabel: {
                  display: true,
                  labelString: 'Porcentaje',
                  fontSize: 20
              },
              ticks: {
                  min: 0,
                  max: 100,
                  fontSize: 16,
                  stepSize: 10
              }
          }

          ]
      }
    };



      if (this.chart && this.rows) {

      this.chart.ngOnDestroy();

      this.barChartLabels = this.rows
      .map( x => {
        let dia = new Date(x.serie.date).getDay() + 1;
        return   x.serie.date + '-' + numToShortWeekDay(dia);
      });

        let nivel_de_contactabilidad = this.rows
        .map( x => {
          return   x.calc.nivel_de_contactabilidad ? x.calc.nivel_de_contactabilidad * 100 : null;
        });

        let nivel_de_atencion = this.rows
        .map( x => {
          return   x.calc.nivel_de_atencion ? x.calc.nivel_de_atencion * 100 : null;
        });

        let llamadas_contestadas = this.rows
        .map( x => {
          return   x.calc.llamadas_contestadas ? x.calc.llamadas_contestadas : null;
        });

        let llamadas_fallidas = this.rows
        .map( x => {
          return   x.calc.llamadas_fallidas ? x.calc.llamadas_fallidas : null;
        });


        // console.log('nombre_intervalo', this.barChartLabels);
        // console.log('nivel_de_contactabilidad', nivel_de_contactabilidad);
        // console.log('llamadas_contestadas', llamadas_contestadas);


        this.barChartData = [
          {   data: nivel_de_contactabilidad,
              label: 'Nivel de contactabilidad',
              borderColor: '#03741d',
              type: 'line',
              yAxesGroup: 'B',
              yAxisID: 'B',
              fill: false
          },
          {   data: llamadas_contestadas,
              label: 'Contestadas',
              borderColor: '#3e95cd',
              backgroundColor: '#3e95cd',
              yAxisID: 'A'
          },
          {   data: llamadas_fallidas,
              label: 'Fallidas',
              borderColor: '#3e95cd',
              backgroundColor: '#e9061d',
              yAxisID: 'A' },
        ];



      // this.chart.chart = this.chart.getChartBuilder(this.chart.ctx);


      this.counter = 0;

      this.valueChange.emit('ok');
      }


    }

}
