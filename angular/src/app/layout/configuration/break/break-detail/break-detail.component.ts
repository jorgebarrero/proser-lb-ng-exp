import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-break-detail',
  templateUrl: './break-detail.component.html',
  styleUrls: ['./break-detail.component.scss']
})
export class BreakDetailComponent implements OnInit {

  @Input () selected;

  constructor() { }

  ngOnInit() {
  }

}
