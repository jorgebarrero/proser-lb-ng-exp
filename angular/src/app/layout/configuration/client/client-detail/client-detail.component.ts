import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss']
})
export class ClientDetailComponent implements OnInit {

  @Input () selected;

  constructor() { }

  ngOnInit() {
  }

}
