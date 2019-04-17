import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-agents-detail',
  templateUrl: './agents-detail.component.html',
  styleUrls: ['./agents-detail.component.scss']
})
export class AgentsDetailComponent implements OnInit {

  @Input() selected;
  constructor() { }

  ngOnInit() {
  }

}
