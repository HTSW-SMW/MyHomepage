import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appConfig } from './app.config';
import { ImportsModule } from './imports_primeng';
import { SmwHHomeComponent } from './components/smw-h-home/smw-h-home.component';
import { SmwHProjectsComponent } from './components/smw-h-projects/smw-h-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    SmwHHomeComponent,
    SmwHProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImportsModule
  ],
  providers: [appConfig.providers],
  bootstrap: [AppComponent]
})
export class AppModule { }
