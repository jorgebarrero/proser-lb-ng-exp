import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scale-detail',
  templateUrl: './scale-detail.component.html',
  styleUrls: ['./scale-detail.component.scss']
})
export class ScaleDetailComponent implements OnInit {

  @Input () selected;

  constructor() { }

  ngOnInit() {
  }

}
