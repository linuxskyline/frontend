import { Component, OnInit } from '@angular/core';
import { Host } from '../host';
import { HostService } from '../host.service';

@Component({
  selector: 'app-hostlist',
  templateUrl: './hostlist.component.html',
  styleUrls: ['./hostlist.component.scss']
})
export class HostlistComponent implements OnInit {
  hosts: Host[];

  constructor(private hostService: HostService) {
  }

  getHosts(): void {
    this.hostService.getHosts()
      .subscribe(
        data => this.hosts = data["data"],
        err => console.error(err),
        () => console.log('done loading foods')
      );
  }

  ngOnInit() {
    this.getHosts();
  }
}
