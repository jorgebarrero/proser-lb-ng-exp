import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { FormBuilder} from '@angular/forms';


import { SelectionConfig, Hours, Interval, Lineas, Llamada, Mode, Peticion} from 'src/app/shared/models';
import { createTitles, createSubTitles, createIntervalTitles} from 'src/app/shared/functions/titles-peticion';

import { MenuService, PeticionService } from 'src/app/shared/services';

@Component({
  selector: 'app-config-peticion',
  templateUrl: './config-peticion.component.html',
  styleUrls: ['./config-peticion.component.scss']
})
export class ConfigPeticionComponent implements OnInit {

  @Input() selection: SelectionConfig;
  @Input() peticion: Peticion;

  @Input() peticiones: any;
  @Output() valueChange = new EventEmitter();
  @Output() connected;

  message;

  consultas_SQL;
  // peticiones;


  // selection;
  options;



  constructor(

    private peticionService: PeticionService,

  ) {

    this.selection = new SelectionConfig;
    this.options = new SelectionConfig;

    this.peticion = new Peticion;
    this.peticiones = [this.peticion];

    this.options.servicios = [];
    this.selection.servicios = [];
    this.consultas_SQL = '';

  }

  ngOnInit() {

    console.log('PETICIONES', this.peticiones);

    // this.getAll_Peticiones();
  }


  onChange() {
    // this.filter.selection = this.selection;
    this.valueChange.emit(this.peticion);

  }

   // Lista escalas disponibles
   getAll_Peticiones(consultas_SQL?) {

    this.peticionService.getAll_Records(consultas_SQL)
    .subscribe(
        data => {
            if (data.length > 0 ) {
              this.peticiones = data
              .map( x => {
                x.selection = JSON.parse(x.filtro_peticiones);
                return x;
              });

               // console.log(this.peticiones);
            }
          },
        err => {
            console.log('error de lectura', err, err.ok);
            this.connected = err.ok;
            // this.valueChange.emit(this.connected);
            // console.log('this.connected',  this.connected);
            this.message = 'Conexión no disponible';
        }
     );
  }




}
