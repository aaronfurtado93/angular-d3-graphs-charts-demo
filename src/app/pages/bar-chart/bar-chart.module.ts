import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarChartRoutingModule } from './bar-chart-routing.module';
import { BarChartComponent } from './bar-chart.component';
import { ChartsModule } from '../../charts/charts.module';

@NgModule({
  imports: [
    CommonModule,
    BarChartRoutingModule,
    ChartsModule
  ],
  declarations: [
    BarChartComponent
  ]
})
export class BarChartModule { }
