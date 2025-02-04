import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmwHCardComponent } from './smw-h-card.component';
import { CardModule } from 'primeng/card';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SmwHCardComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    RouterModule
  ],
  exports: [
    SmwHCardComponent
  ]
})
export class SmwHCardModule { }
