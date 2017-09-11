import {Component, Input, OnInit} from '@angular/core';

import { ChartOptions } from '../chart-interfaces/chart-options';
import { ChartContainerService } from '../services/chart-container/chart-container.service';
import { ChartBarService } from '../services/chart-bar/chart-bar.service';
import { Selection, BaseType } from 'd3-selection';

@Component({
  selector: 'app-cbar',
  templateUrl: './cbar.component.html',
  styleUrls: ['./cbar.component.scss']
})
export class CBarComponent implements OnInit {

  @Input() dataSet: any;
  @Input() chartOptions: ChartOptions;

  svgContainer: Selection<BaseType, {}, HTMLElement, any>;

  constructor(
    private chartContainerService: ChartContainerService,
    private chartBarService: ChartBarService
  ) {
    setInterval(() => {
      this.updateChart();
    }, 4000);
  }

  ngOnInit() {
    this.chartContainerService.createSvgContainer(this.chartOptions)
      .then(svgContainer => this.chartBarService.createBarsFromDataSet(svgContainer, this.chartOptions, this.dataSet, 1))
      .then(svgContainer => this.chartBarService.colorBarRgbaGradient(svgContainer, this.chartOptions, this.dataSet, 1))
      .then(svgContainer => this.svgContainer = svgContainer)
      .catch(reason => console.log(reason));
  }

  private updateChart() {

    this.dataSet = this.dataSet.map(item => Math.random() * 5000);

    this.chartBarService.updateBarsFromDataSet(this.svgContainer, this.chartOptions, this.dataSet, 1)
      .then(svgContainer => this.chartBarService.colorBarRgbaGradient(svgContainer, this.chartOptions, this.dataSet, 1))
      .then(svgContainer => this.svgContainer);

  }
}
