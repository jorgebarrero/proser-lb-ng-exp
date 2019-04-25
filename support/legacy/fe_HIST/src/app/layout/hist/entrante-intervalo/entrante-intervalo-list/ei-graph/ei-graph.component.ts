

import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

import { BaseChartDirective } from 'ng2-charts/ng2-charts';

import { calcularEscalaGrafico } from './../../../../../shared/functions';


@Component({
  selector: 'app-ei-graph',
  templateUrl: './ei-graph.component.html',
  styleUrls: ['./ei-graph.component.scss']
})
export class EiGraphComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  @Input() rows;
  @Input() rows_all;
  @Input() selection;

  @Output() valueChange = new EventEmitter();

  counter;

  data_del_grafico = [];
  data_abandonadas = [];
  data_atendidas = [];
  data_nivel_de_servicio = [];
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

    let max_llamadas_atendidas = this.rows
    .map( x => {
      return   x.calc.llamadas_atendidas ? x.calc.llamadas_atendidas : null;
    })
    .reduce(function( max, cell) {
      return Math.max( max, cell);
     }, 0);

    if (this.rows) {

      this.stepinterval = calcularEscalaGrafico( max_llamadas_atendidas );
    }

    // this.stepinterval = 50; // Number((cantidadTotal / cantIntervalos).toFixed(2));

    this.barChartLabels = [
      'Gráfico de llamadas entrantes por intervalos'
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
                fontSize: 20
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
          return   x.serie.minutes.substring(0, 5);
        });

        let nivel_de_servicio = this.rows
        .map( x => {
          return   x.calc.nivel_de_servicio ? x.calc.nivel_de_servicio * 100 : null;
        });

        let nivel_de_atencion = this.rows
        .map( x => {
          return   x.calc.nivel_de_atencion ? x.calc.nivel_de_atencion * 100 : null;
        });

        let llamadas_atendidas = this.rows
        .map( x => {
          return   x.calc.llamadas_atendidas ? x.calc.llamadas_atendidas : null;
        });


        let llamadas_abandonadas = this.rows
        .map( x => {
          return   x.calc.llamadas_abandonadas ? x.calc.llamadas_abandonadas : null;
        });


        // console.log('nombre_intervalo', this.barChartLabels);
        // console.log('nivel_de_servicio', nivel_de_servicio);
        // console.log('llamadas_atendidas', llamadas_atendidas);


        this.barChartData = [
          {   data: nivel_de_servicio,
              label: 'Nivel de servicio',
              borderColor: '#03741d',
              type: 'line',
              yAxesGroup: 'B',
              yAxisID: 'B',
              fill: false
          },
          {   data: llamadas_atendidas,
              label: 'Atendidas',
              borderColor: '#3e95cd',
              backgroundColor: '#3e95cd',
              yAxisID: 'A'
          },
          {   data: llamadas_abandonadas,
              label: 'Abandonadas',
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
