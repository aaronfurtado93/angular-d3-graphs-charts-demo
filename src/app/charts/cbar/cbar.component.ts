import {Component, Input, OnInit} from '@angular/core';

import * as d3 from 'd3';
import 'd3-selection-multi';
import { Selection, BaseType} from 'd3-selection';

import { ChartOptions } from '../chart-interfaces/chart-options';

@Component({
  selector: 'app-cbar',
  templateUrl: './cbar.component.html',
  styleUrls: ['./cbar.component.scss']
})
export class CBarComponent implements OnInit {

  @Input() dataSet: any;
  @Input() chartOptions: ChartOptions;

  svgContainer: Selection<BaseType, {}, HTMLElement, any>;

  constructor() {
  }

  ngOnInit() {
    console.log(`dataSet`, this.dataSet);
    console.log(`chartOptions`, this.chartOptions);

    this.createSvgContainer()
      .then(svgContainer => this.createBarsFromDataSet(svgContainer, this.dataSet))
      .catch(reason => console.log(reason));

  }

  // CONTAINER Methods
  private createSvgContainer(): Promise<Selection<BaseType, {}, HTMLElement, any>> {
    return new Promise(
      (resolve, reject) => {
        try {
          const width = this.chartOptions.chartContainerWidth;
          const height = this.chartOptions.chartContainerHeight;

          const svgContainer = d3.select('.chart')
            .append('svg')
            .attrs({
              'class': 'container',
              height,
              width
            });
          resolve(svgContainer);
        } catch (reason) {
          reject(reason);
        }
      }
    );
  }

  // BAR Methods
  private createBarsFromDataSet(svgContainer, dataSet) {
    const x = (data, index) => index * this.chartOptions.chartContainerWidth / this.dataSet.length;
    const y = (data) => this.chartOptions.chartContainerHeight - data;
    const width = (data) => this.chartOptions.chartContainerWidth / this.dataSet.length - this.chartOptions.dataVisualizationPadding;
    const height = (data) => data;

    svgContainer.selectAll('rect')
      .data(dataSet)
      .enter()
      .append('rect')
      .attrs({
        x,
        y,
        width,
        height
      });
  }




}
