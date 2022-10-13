import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers',       // select by element - <app-server><app-server>
  // selector: '[app-servers]',     // select by attribute - <div app-server></div>
  // selector: '.app-servers',      // select by class - <div class=app-server></div>
  selector: 'app-servers',
  // template: `<app-server></app-server>
  //   <app-server></app-server> `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreatingStatus = 'No server was created!';
  serverName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreatingStatus = 'Server was created!';
  }

  onUpdateServerName(event: Event) {
    console.log(event.target);
    console.log(<HTMLInputElement>event.target);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
