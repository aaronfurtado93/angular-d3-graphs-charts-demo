import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CBarModule } from './cbar/cbar.module';
import { ChartServicesModule } from './services/chart-services.module';
import { CEnterExitModule } from './c-enter-exit/center-exit.module';

@NgModule({
  imports: [
    CommonModule,
    ChartServicesModule,
    CBarModule,
    CEnterExitModule
  ],
  declarations: [],
  exports: [
    CBarModule,
    CEnterExitModule
  ],
  providers: []
})
export class ChartsModule { }
