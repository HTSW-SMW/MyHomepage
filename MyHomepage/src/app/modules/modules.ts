import { NgModule } from '@angular/core';
import { SmwHCardModule } from './smw-h-card/smw-h-card.module';

@NgModule({
  imports: [
    SmwHCardModule,
  ],
  exports: [
    SmwHCardModule
  ],
  providers: []
})
export class ModulesImport { }
