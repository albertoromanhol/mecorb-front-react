import { IOrbit } from './Orbit';
import { ISpacecraft } from './Spacecraft';

export interface IManouverConfig {
  initialOrbit: IOrbit;
  finalOrbit: IOrbit;
  firstBiEllipseApogge: number | undefined;
  spacecraft: ISpacecraft;
}