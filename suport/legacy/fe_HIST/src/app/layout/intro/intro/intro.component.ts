import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  constructor(

  ) { }

  // Variables

  cdr_entrante;
  cdr_saliente;
  cdr_manual;


  ngOnInit() {


  }


  recibirCdrEntrante($event) {
    this.cdr_entrante = $event;
    // console.log('RECIBIDO INDICADORES cdr...',this.indicadoresCDR);
  }


}
