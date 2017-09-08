import {Component, Input, OnInit} from '@angular/core';

import { ChartOptions } from '../chart-interfaces/chart-options';
import { ChartContainerService } from '../services/chart-container/chart-container.service';
import { ChartBarService } from '../services/chart-bar/chart-bar.service';

@Component({
  selector: 'app-cbar',
  templateUrl: './cbar.component.html',
  styleUrls: ['./cbar.component.scss']
})
export class CBarComponent implements OnInit {

  @Input() dataSet: any;
  @Input() chartOptions: ChartOptions;

  // svgContainer: Selection<BaseType, {}, HTMLElement, any>;

  constructor(
    private chartContainerService: ChartContainerService,
    private chartBarService: ChartBarService
  ) {
  }

  ngOnInit() {
    this.chartContainerService.createSvgContainer(this.chartOptions)
      .then(svgContainer => this.chartBarService.createBarsFromDataSet(svgContainer, this.chartOptions, this.dataSet, 1))
      .then(svgContainer => this.chartBarService.createBarsFromDataSet(svgContainer, this.chartOptions, this.dataSet, 2))
      .catch(reason => console.log(reason));

  }
}
