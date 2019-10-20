import { Component, OnInit } from '@angular/core';
import { Host } from '../host';
import { HostService } from '../host.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-host',
  templateUrl: './add-host.component.html',
  styleUrls: ['./add-host.component.scss']
})
export class AddHostComponent implements OnInit {
  host: Host = new Host();

  constructor(private hostService: HostService, private router: Router) { }

  ngOnInit() {
  }

  addHost() {
    console.log("Adding host...")
    this.hostService.addHost(this.host)
    .subscribe(
      data => this.router.navigate(['/hosts']),
      err => console.error(err),
      () => console.log('done adding host')
    );
  }
}
