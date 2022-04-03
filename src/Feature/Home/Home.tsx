import React from 'react';

import { PageLocation } from '../../shared/enums/PageLocation';
import { HomeItem } from './Components/HomeItem';
import { About } from './Components/About';
import { HomeContext } from './HomeContext';
import { Initial } from './Components/Initial';
import { FirstSimulation } from '../FirstSimulation/View/FirstSimulation';

export function Home() {
    
    const [pageLocation, setPageLocation] = React.useState<PageLocation>(PageLocation.INITAL);

    return (
        <div style={{
            flexGrow: 1,
            overflow: 'hidden',
        }}>
            <HomeContext.Provider value={{
                pageLocation, setPageLocation,
            }}>
                <HomeItem pageLocation={PageLocation.INITAL}>
                    <Initial />
                </HomeItem>
                
                <HomeItem pageLocation={PageLocation.FIRST_SIMULATION}>
                    <FirstSimulation />
                </HomeItem>

                <HomeItem pageLocation={PageLocation.ABOUT}>
                    <About />
                </HomeItem>
                
            </HomeContext.Provider>
        </div>
    );
}