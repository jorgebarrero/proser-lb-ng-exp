import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-agent-detail',
  templateUrl: './agent-detail.component.html',
  styleUrls: ['./agent-detail.component.scss']
})
export class AgentDetailComponent implements OnInit {

@Input() selected;

  constructor() { }

  ngOnInit() {
  }

}
