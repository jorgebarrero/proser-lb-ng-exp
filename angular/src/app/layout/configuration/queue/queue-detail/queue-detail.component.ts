import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-queue-detail',
  templateUrl: './queue-detail.component.html',
  styleUrls: ['./queue-detail.component.scss']
})
export class QueueDetailComponent implements OnInit {


  @Input () selected;

  constructor() { }

  ngOnInit() {
  }

}
