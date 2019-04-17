import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selector-agent',
  templateUrl: './selector-agent.component.html',
  styleUrls: ['./selector-agent.component.scss']
})
export class SelectorAgentComponent implements OnInit {

  constructor() { }
  people$;
  selectedPersonId;
  ngOnInit() {
  }

}
