import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnterExitComponent } from './enter-exit.component';

const routes: Routes = [
  {
    path: '',
    component: EnterExitComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnterExitRoutingModule { }
