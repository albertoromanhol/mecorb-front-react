import { IPlanet } from './Planet';

export interface ISimulationConfig {
  planets: IPlanet[];
  initialDay: Date | null;
  simulationDays: number;
}