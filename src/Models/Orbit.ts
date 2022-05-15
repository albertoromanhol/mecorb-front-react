export interface IOrbit {
  excentricity: number | undefined;
  majorSemiAxis: number | undefined;
}

export const orbitInitialState: IOrbit = {
    excentricity: 0,
    majorSemiAxis: 0,
};