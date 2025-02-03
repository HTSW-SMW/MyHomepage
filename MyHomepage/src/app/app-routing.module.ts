import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmwHProjectsComponent } from './components/smw-h-projects/smw-h-projects.component';

const routes: Routes = [
  { 'path': "Projects", "component": SmwHProjectsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
