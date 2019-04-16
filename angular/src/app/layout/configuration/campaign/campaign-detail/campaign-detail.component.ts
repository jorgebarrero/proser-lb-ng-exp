import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-campaign-detail',
  templateUrl: './campaign-detail.component.html',
  styleUrls: ['./campaign-detail.component.scss']
})
export class CampaignDetailComponent implements OnInit {

  @Input () selected;

  constructor() { }

  ngOnInit() {
  }

}
