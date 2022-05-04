import { AxiosError } from 'axios';
import React from 'react';
import { ISimulationResult } from '../../Models/SimulationResult';
import { alertDialogPropsInitial, IAlertDialogProps } from '../../shared/Components/AlertDialog';
import { PageLocation } from '../../shared/enums/PageLocation';

export interface IHomeContextProps {
    pageLocation: PageLocation,
    setPageLocation: (pageLocation: PageLocation) => void,
    
    openLoadingDialog: boolean,
    setOpenLoadingDialog: (open: boolean) => void,

    simulationResult: ISimulationResult | null,
    setSimulationResult: (simulationResult: ISimulationResult | null) => void,

    isManouver: boolean,
    setIsManouver: (isManouver: boolean) => void,
    
    alertProps: IAlertDialogProps,
    showError:  (error: AxiosError, message: string) => void,
    showSuccess: (message: string) => void,
    showWarning: (message: string) => void,
}

export const homeContextInitial: IHomeContextProps = {
    pageLocation: PageLocation.INITAL,
    setPageLocation: () => { ''; },

    openLoadingDialog: false,
    setOpenLoadingDialog: () => { ''; },

    simulationResult: null,
    setSimulationResult: () => { ''; },

    isManouver: false,
    setIsManouver: () => { ''; },
    
    alertProps: alertDialogPropsInitial,
    showError: () =>  { ''; },
    showSuccess:  () =>  { ''; },
    showWarning:  () =>  { ''; },
};

export const HomeContext = React.createContext(homeContextInitial);
