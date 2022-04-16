import React from 'react';
import { ISimulationResult } from '../../Models/SimulationResult';
import { PageLocation } from '../../shared/enums/PageLocation';

export interface IHomeContextProps {
    pageLocation: PageLocation,
    setPageLocation: (pageLocation: PageLocation) => void,

    simulationResult: ISimulationResult | null,
    setSimulationResult: (simulationResult: ISimulationResult | null) => void,
}

export const homeContextInitial: IHomeContextProps = {
    pageLocation: PageLocation.INITAL,
    setPageLocation: () => { ''; },

    simulationResult: null,
    setSimulationResult: () => { ''; },
};

export const HomeContext = React.createContext(homeContextInitial);
