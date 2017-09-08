import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CBarComponent } from './cbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CBarComponent
  ],
  entryComponents: [
    CBarComponent
  ],
  exports: [
    CBarComponent
  ]
})
export class CBarModule { }
