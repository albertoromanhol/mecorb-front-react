import { IPlanet } from './Planet';

export interface ISimulationConfig {
  planets: IPlanet[];
  initialDate: Date | null;
  simulationDays: number;
  simulationSteps: number;
}