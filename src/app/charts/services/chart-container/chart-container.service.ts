import { Injectable } from '@angular/core';

import * as d3 from 'd3';
import {Selection, BaseType} from 'd3-selection';

import { ChartOptions } from '../../chart-interfaces/chart-options';

@Injectable()
export class ChartContainerService {

  constructor() { }

  public createSvgContainer(chartOptions: ChartOptions): Promise<Selection<BaseType, {}, HTMLElement, any>> {
    return new Promise(
      (resolve, reject) => {
        try {
          const width = chartOptions.chartContainerWidth;
          const height = chartOptions.chartContainerHeight;

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

}
