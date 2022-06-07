export interface ISpacecraft {
  mass: number | undefined;
  isp: number | undefined;
}

export const orbitInitialState: ISpacecraft = {
    mass: 0,
    isp: 0,
};