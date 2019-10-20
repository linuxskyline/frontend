import { Component, OnInit } from '@angular/core';
import { Update } from '../update';
import { UpdateService } from '../update.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-update-list',
  templateUrl: './update-list.component.html',
  styleUrls: ['./update-list.component.scss']
})
export class UpdateListComponent implements OnInit {
  updates: Update[];
  private routeSub: Subscription;

  constructor(private updateService: UpdateService, private route: ActivatedRoute) { }

  getUpdates(host_id: number): void {
    this.updateService.getUpdates(host_id)
      .subscribe(
        data => {
          this.updates = data["data"],
          console.log(data)
          console.log(this.updates)
        },
        err => console.error(err),
        () => console.log('done loading updates')
      );
  }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.getUpdates(params['hostid'])
    }); 
  }

}
