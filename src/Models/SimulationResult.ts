import { IPlanet } from './Planet';

export interface ISimulationResult {
  planets: IPlanet[];
  deltaV?: { [K: string]: number };
  time: number[];
  collision: string[];
  trajectoryPoints: number;
}