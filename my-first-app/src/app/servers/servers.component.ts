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
  serverCreationStatus = 'No server was created!';
  serverName = '';
  userName = '';
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus =
      'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = '';
  }

  setUserName(event: Event) {
    console.log((<HTMLInputElement>event.target).value);
    this.userName = (<HTMLInputElement>event.target).value;
  }

  isEmpty() {
    console.log();
    if (this.userName === '') {
      return true;
    }
    return false;
  }
}
