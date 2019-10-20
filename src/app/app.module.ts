import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HostlistComponent } from './hostlist/hostlist.component';
import { HttpClientModule } from '@angular/common/http';
import { AddHostComponent } from './add-host/add-host.component';
import { FormsModule } from '@angular/forms';
import { AutofocusDirective } from './autofocus.directive';
import { UpdateListComponent } from './update-list/update-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HostlistComponent,
    AddHostComponent,
    AutofocusDirective,
    UpdateListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
