import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inbound-detail',
  templateUrl: './inbound-detail.component.html',
  styleUrls: ['./inbound-detail.component.scss']
})
export class InboundDetailComponent implements OnInit {


  @Input() selected;
  constructor() { }

  ngOnInit() {
  }

}
