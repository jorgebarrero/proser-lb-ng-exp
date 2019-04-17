import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-outbound-detail',
  templateUrl: './outbound-detail.component.html',
  styleUrls: ['./outbound-detail.component.scss']
})
export class OutboundDetailComponent implements OnInit {

  @Input() selected;
  constructor() { }

  ngOnInit() {
  }

}
