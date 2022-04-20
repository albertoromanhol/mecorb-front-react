import { ITrajectory } from './Trajectory';

export interface IPlanet {
  id: number;
  name: string;
  namePTBR: string;
  nasaHorizonBodyId: number;
  mass: number;
  radius: number;
  trajectory: ITrajectory;
}