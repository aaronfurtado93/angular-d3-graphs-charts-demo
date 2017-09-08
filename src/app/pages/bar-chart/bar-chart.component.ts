import { Component, OnInit } from '@angular/core';
import { ChartOptions } from '../../charts/chart-interfaces/chart-options';

import simpleArrayDataSet from '../../charts/sample-data/simple-array.dataset.json';
import simpleBarChartOptions from '../../charts/sample-options/simple-bar-chart.options.json';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  dataSet;

  chartOptions: ChartOptions;

  constructor() {
    this.dataSet = simpleArrayDataSet;
    this.chartOptions = simpleBarChartOptions;
  }

  ngOnInit() {
  }

}
