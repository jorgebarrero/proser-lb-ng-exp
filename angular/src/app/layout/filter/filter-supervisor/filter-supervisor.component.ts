import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-supervisor',
  templateUrl: './filter-supervisor.component.html',
  styleUrls: ['./filter-supervisor.component.scss']
})
export class FilterSupervisorComponent implements OnInit {

  constructor() { }


  items = ['manzana', 'pera'];
  selection;

  ngOnInit() {
  }

  onChange() {

  }



}
