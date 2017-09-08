export interface ChartOptions {
  chartContainerHeight: number;
  chartContainerWidth: number;
  dataVisualizationPaddingBetweenItems: number;
  dataVisualizationPaddingChartTopPercent: number;
  chartGradient?: string;
  barRgbaColors?: {
    red: number,
    green: number,
    blue: number
  };
}
