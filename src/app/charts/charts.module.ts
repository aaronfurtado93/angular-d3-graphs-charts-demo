import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CBarModule } from './cbar/cbar.module';

@NgModule({
  imports: [
    CommonModule,
    CBarModule
  ],
  declarations: [],
  exports: [
    CBarModule
  ]
})
export class ChartsModule { }
