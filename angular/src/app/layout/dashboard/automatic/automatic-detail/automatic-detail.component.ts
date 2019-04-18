import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-automatic-detail',
  templateUrl: './automatic-detail.component.html',
  styleUrls: ['./automatic-detail.component.scss']
})
export class AutomaticDetailComponent implements OnInit {

  @Input() selected;
  constructor() { }

  ngOnInit() {
  }

}
