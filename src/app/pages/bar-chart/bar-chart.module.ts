import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarChartRoutingModule } from './bar-chart-routing.module';
import { BarChartComponent } from './bar-chart.component';

@NgModule({
  imports: [
    CommonModule,
    BarChartRoutingModule
  ],
  declarations: [
    BarChartComponent
  ]
})
export class BarChartModule { }
