import { IOrbit } from './Orbit';

export interface IManouverConfig {
  initialOrbit: IOrbit;
  finalOrbit: IOrbit;
  firstBiEllipseApogge: number | undefined;
}