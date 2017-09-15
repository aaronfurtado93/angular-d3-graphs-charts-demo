import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnterExitRoutingModule } from './enter-exit-routing.module';
import { EnterExitComponent } from './enter-exit.component';

@NgModule({
  imports: [
    CommonModule,
    EnterExitRoutingModule
  ],
  declarations: [EnterExitComponent]
})
export class EnterExitModule { }
