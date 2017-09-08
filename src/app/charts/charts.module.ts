import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CBarModule } from './cbar/cbar.module';
import { ChartServicesModule } from './services/chart-services.module';

@NgModule({
  imports: [
    CommonModule,
    CBarModule,
    ChartServicesModule
  ],
  declarations: [],
  exports: [
    CBarModule
  ],
  providers: []
})
export class ChartsModule { }
