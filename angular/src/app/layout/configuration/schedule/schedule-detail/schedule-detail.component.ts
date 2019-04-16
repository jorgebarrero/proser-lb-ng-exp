import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-schedule-detail',
  templateUrl: './schedule-detail.component.html',
  styleUrls: ['./schedule-detail.component.scss']
})
export class ScheduleDetailComponent implements OnInit {

  @Input () selected;

  constructor() { }

  ngOnInit() {
  }

}
