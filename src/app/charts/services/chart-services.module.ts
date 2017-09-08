import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartContainerService } from './chart-container/chart-container.service';
import { ChartBarService } from './chart-bar/chart-bar.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    ChartContainerService,
    ChartBarService
  ]
})
export class ChartServicesModule { }
