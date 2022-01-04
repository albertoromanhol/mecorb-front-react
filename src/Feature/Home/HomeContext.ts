import React from 'react';
import { PageLocation } from '../../shared/enums/PageLocation';

export interface IHomeContextProps {
    pageLocation: PageLocation,
    setPageLocation: (pageLocation: PageLocation) => void,
}

export const homeContextInitial: IHomeContextProps = {
    pageLocation: PageLocation.INITAL,
    setPageLocation: () => { ''; },
};

export const HomeContext = React.createContext(homeContextInitial);
