import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-asignation-detail',
  templateUrl: './asignation-detail.component.html',
  styleUrls: ['./asignation-detail.component.scss']
})
export class AsignationDetailComponent implements OnInit {

  @Input () selected;

  constructor() { }

  ngOnInit() {
  }

}
