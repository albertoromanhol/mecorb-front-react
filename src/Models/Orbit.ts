export interface IOrbit {
  excentricity: number;
  majorSemiAxis: number;
}

export const orbitInitialState: IOrbit = {
    excentricity: 0,
    majorSemiAxis: 0,
};