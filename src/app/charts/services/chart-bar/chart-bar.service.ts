import { Injectable } from '@angular/core';

import * as d3 from 'd3';
import 'd3-selection-multi';
import {Selection, BaseType, ArrayLike} from 'd3-selection';

import {ChartOptions} from '../../chart-interfaces/chart-options';
import {isNullOrUndefined} from 'util';

@Injectable()
export class ChartBarService {

  private isUpdate = false;
  private dataSetMax: number;
  private calculatedBarHeight: number;
  private dataVisualizationPaddingBetweenItemsHalf: number;

  constructor() { }

  // BAR Methods
  public createBarsFromDataSet(
    svgContainer: Selection<BaseType, {}, HTMLElement, any>,
    chartOptions: ChartOptions,
    dataSet,
    layer
  ): Promise<Selection<BaseType, {}, HTMLElement, any>> {
    return new Promise(
      (resolve, reject) => {
        try {
          svgContainer.selectAll(`rect.layer-${layer}`)
            .data(dataSet)
            .enter()
            .append('rect')
            .attrs({
              'class': `layer-${layer}`,
              'x': (data, index) => this.calculateBarXPosition(index, chartOptions, dataSet),
              'y': (data) => this.calculateBarYPosition(data, chartOptions, dataSet),
              'width': (data, index) => this.calculateBarWidth(chartOptions, dataSet),
              'height': (data) => this.calculateBarHeight(data, chartOptions, dataSet)
            });

          resolve(svgContainer);
        } catch (reason) {
          reject (reason);
        }
      }
    );
  }

  public updateBarsFromDataSet(
    svgContainer: Selection<BaseType, {}, HTMLElement, any>,
    chartOptions: ChartOptions,
    dataSet,
    layer
  ): Promise<Selection<BaseType, {}, HTMLElement, any>> {
    return new Promise(
      (resolve, reject) => {
        try {
          this.isUpdate = true;

          svgContainer.selectAll(`rect.layer-${layer}`)
            .data(dataSet)
            .transition()
            .duration(1000)
            .attrs({
              'class': `layer-${layer}`,
              'x': (data, index) => this.calculateBarXPosition(index, chartOptions, dataSet),
              'y': (data) => this.calculateBarYPosition(data, chartOptions, dataSet),
              'width': (data, index) => this.calculateBarWidth(chartOptions, dataSet),
              'height': (data) => this.calculateBarHeight(data, chartOptions, dataSet)
            })
            .transition()
            .duration(1000);

          resolve(svgContainer);
        } catch (reason) {
          reject (reason);
        }
      }
    );
  }


  private calculateBarXPosition(index: number, chartOptions: ChartOptions, dataSet): number {
    if (isNullOrUndefined(this.dataVisualizationPaddingBetweenItemsHalf)) {
      this.dataVisualizationPaddingBetweenItemsHalf = chartOptions.dataVisualizationPaddingBetweenItems / 2;
    }

    return index * chartOptions.chartContainerWidth / dataSet.length
      + this.dataVisualizationPaddingBetweenItemsHalf;
  }


  private calculateBarYPosition(data, chartOptions: ChartOptions, dataSet: ArrayLike<any>): number {
    return chartOptions.chartContainerHeight - this.calculateBarHeight(data, chartOptions, dataSet);
  }


  private calculateBarWidth(chartOptions: ChartOptions, dataSet): number {
    return chartOptions.chartContainerWidth / dataSet.length - (chartOptions.dataVisualizationPaddingBetweenItems);
  }


  private calculateBarHeight(data, chartOptions: ChartOptions, dataSet: ArrayLike<any>): number {
    if (!isNullOrUndefined(this.calculateBarHeight)) {
      let dataSetMax;

      if (this.dataSetMax && !this.isUpdate) {
        dataSetMax = this.dataSetMax;
      } else {
        this.dataSetMax = d3.max(dataSet);
        dataSetMax = this.dataSetMax;
      }

      this.calculatedBarHeight = ((data / dataSetMax) * (1 - chartOptions.dataVisualizationPaddingChartTopPercent))
        * chartOptions.chartContainerHeight;

      return this.calculatedBarHeight;
    }
    return this.calculatedBarHeight;
  }


  public colorBarRgbaGradient(
    svgContainer: Selection<BaseType, {}, HTMLElement, any>,
    chartOptions: ChartOptions,
    dataSet,
    layer
  ): Promise<Selection<BaseType, {}, HTMLElement, any>> {
    return new Promise(
      (resolve, reject) => {
        try {
          svgContainer.selectAll(`rect.layer-${layer}`)
            .attrs({
              'fill': (data: number) => {
                return `rgba(${ Math.round(data / this.dataSetMax * 255)},0,0,0.75)`;
              }
            });

          resolve(svgContainer);
        } catch (reason) {
          reject (reason);
        }
      }
    );
  }


}
