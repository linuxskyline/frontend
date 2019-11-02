import { Component, OnInit } from '@angular/core';
import { HostService } from '../host.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Host } from '../host';

@Component({
  selector: 'app-host-display',
  templateUrl: './host-display.component.html',
  styleUrls: ['./host-display.component.scss']
})
export class HostDisplayComponent implements OnInit {
  private routeSub: Subscription;
  private hostID: number;
  host: Host;

  constructor(private hostService: HostService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.hostID = params['hostid']
    }); 
  }

  getHost(hostID: number) {
    this.hostService.getHost(hostID)
    .subscribe(
      data => this.host = data["data"],
      err => console.error(err),
      () => console.log('done loading host')
    );
  }

  deleteHost() {
    console.log("Deleting host...")
    this.hostService.deleteHost(this.hostID)
    .subscribe(
      data => this.router.navigate(['/hosts']),
      err => console.error(err),
      () => console.log('done adding host')
    );
  }
}
