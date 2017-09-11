export interface ChartOptions {
  chartContainerHeight: number;
  chartContainerWidth: number;
  dataVisualizationPaddingBetweenItems: number;
  dataVisualizationPaddingChartTopPercent: number;
  dataColoring?: Array<{
    red: number;
    redGradient?: string;
    green: number;
    greenGradient?: string;
    blue: number;
    blueGradient?: string;
    transparency?: number;
  }>;
}
