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
        redirectTo: '/bar-chart',
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
