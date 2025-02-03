import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmwHProjectsComponent } from './components/smw-h-projects/smw-h-projects.component';
import { SmwHHomeComponent } from './components/smw-h-home/smw-h-home.component';

const routes: Routes = [
  { 'path': "Home", "component": SmwHHomeComponent },
  { 'path': "Projects", "component": SmwHProjectsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
