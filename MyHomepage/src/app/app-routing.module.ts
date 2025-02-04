import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmwHProjectsComponent } from './components/smw-h-projects/smw-h-projects.component';
import { SmwHHomeComponent } from './components/smw-h-home/smw-h-home.component';
import { SmwH404Component } from './components/smw-h-404/smw-h-404.component';

const routes: Routes = [
  { 'path': "", "component": SmwHHomeComponent },
  { 'path': "Home", "component": SmwHHomeComponent },
  { 'path': "Projects", "component": SmwHProjectsComponent },
  { 'path': "**", "component": SmwH404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
