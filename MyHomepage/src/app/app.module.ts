import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appConfig } from './app.config';
import { ImportsModule } from './imports_primeng';
import { SmwHHomeComponent } from './components/smw-h-home/smw-h-home.component';
import { SmwHProjectsComponent } from './components/smw-h-projects/smw-h-projects.component';
import { ModulesImport } from './modules/modules';
import { SmwH404Component } from './components/smw-h-404/smw-h-404.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    SmwHHomeComponent,
    SmwHProjectsComponent,
    SmwH404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImportsModule,
    ModulesImport,
    RouterModule
  ],
  providers: [appConfig.providers],
  bootstrap: [AppComponent]
})
export class AppModule { }
