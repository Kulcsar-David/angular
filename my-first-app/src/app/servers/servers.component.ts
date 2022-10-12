import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers',       // select by element - <app-server><app-server>
  // selector: '[app-servers]',     // select by attribute - <div app-server></div>
  // selector: '.app-servers',      // select by class - <div class=app-server></div>
  selector: 'app-servers',
  template: `<app-server></app-server>
    <app-server></app-server> `,
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
