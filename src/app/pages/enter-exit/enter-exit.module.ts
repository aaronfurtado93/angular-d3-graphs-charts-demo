import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnterExitRoutingModule } from './enter-exit-routing.module';
import { EnterExitComponent } from './enter-exit.component';
import { ChartsModule } from '../../charts/charts.module';

@NgModule({
  imports: [
    CommonModule,
    EnterExitRoutingModule,
    ChartsModule
  ],
  declarations: [EnterExitComponent]
})
export class EnterExitModule { }
