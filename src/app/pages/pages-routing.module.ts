import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PagesComponent} from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        redirectTo: '/enter-exit',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'bar-chart',
        loadChildren: './bar-chart/bar-chart.module#BarChartModule'
      },
      {
        path: 'enter-exit',
        loadChildren: './enter-exit/enter-exit.module#EnterExitModule'
      },
      {
        path: 'not-found',
        loadChildren: './not-found/not-found.module#NotFoundModule'
      },
      {
        path: '**',
        redirectTo: '/not-found'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
