import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HostlistComponent } from './hostlist/hostlist.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AddHostComponent } from './add-host/add-host.component';
import { FormsModule } from '@angular/forms';
import { AutofocusDirective } from './autofocus.directive';
import { UpdateListComponent } from './update-list/update-list.component';
import { AppConfigService } from './app-config-service.service';
import { HostDisplayComponent } from './host-display/host-display.component';

@NgModule({
  declarations: [
    AppComponent,
    HostlistComponent,
    AddHostComponent,
    AutofocusDirective,
    UpdateListComponent,
    HostDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [AppConfigService],
      useFactory: (appConfigService: AppConfigService) => {
        return () => {
          return appConfigService.loadAppConfig();
        };
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }