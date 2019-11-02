import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HostlistComponent } from './hostlist/hostlist.component';
import { AddHostComponent } from './add-host/add-host.component';
import { UpdateListComponent } from './update-list/update-list.component';
import { HostDisplayComponent } from './host-display/host-display.component';

const routes: Routes = [
  { path: 'addhost', component: AddHostComponent },
  { path: 'hosts', component: HostlistComponent },
  { path: 'hosts/:hostid/updates', component: HostDisplayComponent },
  { path: '',
    redirectTo: '/hosts',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
