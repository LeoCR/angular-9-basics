import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverId:number=10;
  serverStatus:string='offline';
  allowNewServer:boolean=false;
  serverCreationStatus:string="No server was created!";
  serverName:string='Test Server';
  constructor() {
      setTimeout(() => {
          this.allowNewServer=true;
      }, 2000);
  }

  ngOnInit(): void {
  }
  getServerStatus(){
    return this.serverStatus;
  }
  onCreateServer(){
    this.serverCreationStatus="Server was created! Name is: "+this.serverName;
  }
  onUpdateServerName(event:InputEvent){
      this.serverName=(<HTMLInputElement>event.target).value;
  }
}
