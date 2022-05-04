export interface IPlotData {
  x: number[],
  y: number[],
  name: string,
  mode: string,
  z?: number[],
  type?: string,
  line?: {
    dash: string
  }
}