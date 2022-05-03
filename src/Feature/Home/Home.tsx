import React from 'react';

import { PageLocation } from '../../shared/enums/PageLocation';
import { HomeItem } from './Components/HomeItem';
import { About } from './Components/About';
import { HomeContext } from './HomeContext';
import { Initial } from './Components/Initial';
import { SolarSystem } from '../SolarSystem/View/SolarSystem';
import { SimulationResult } from '../SimulationResult/View/SimulationResult';
import { Sidebar } from '../Sidebar/View/Sidebar';
import { themeConfiguration } from '../../themeConfiguration';
import { ISimulationResult } from '../../Models/SimulationResult';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { LoadingDialog } from '../../shared/Components/LoadingDialog';
import { Manouvers } from '../Manouvers/Views/Manouvers';
import { AlertDialog, createAlertProps } from '../../shared/Components/AlertDialog';

export function Home() {
    const [openDrawer, setOpenDrawer] = React.useState<boolean>(true);
    const [openLoadingDialog, setOpenLoadingDialog] = React.useState<boolean>(false);

    const [pageLocation, setPageLocation] = React.useState<PageLocation>(PageLocation.INITAL);
    const [simulationResult, setSimulationResult] = React.useState<ISimulationResult | null>(null);

    const { alertProps, showError, showSuccess, showWarning } = createAlertProps();

    React.useEffect(() => { 
        if (openDrawer && pageLocation !== PageLocation.SIMULATION_RESULT)
            return;
        
        if ((openDrawer && pageLocation === PageLocation.SIMULATION_RESULT) 
         || (!openDrawer && pageLocation !== PageLocation.SIMULATION_RESULT))
            setOpenDrawer(pageLocation !== PageLocation.SIMULATION_RESULT);
    }, [pageLocation]);
    
    return (
        <div style={{
            flexGrow: 1,
            overflow: 'hidden',
        }}>
            <HomeContext.Provider value={{
                pageLocation, setPageLocation,
                simulationResult, setSimulationResult,
                openLoadingDialog, setOpenLoadingDialog,
                alertProps,              
                showError, 
                showSuccess,
                showWarning
            }}>
                {!openDrawer && (
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        style={{
                            margin: themeConfiguration.spacing(1),
                            position: 'fixed',
                        }}
                        onClick={() => {setOpenDrawer(true);}}>
                        <MenuIcon />
                    </IconButton>)}
                <Sidebar opened={openDrawer} setOpened={setOpenDrawer} />
                <div style={{
                    marginLeft: (openDrawer ? themeConfiguration.spacing(25) : 0),
                }}>
                    <HomeItem pageLocation={PageLocation.INITAL}>
                        <Initial />
                    </HomeItem>
                
                    <HomeItem pageLocation={PageLocation.SOLAR_SYSTEM}>
                        <SolarSystem />
                    </HomeItem>

                    <HomeItem pageLocationList={[PageLocation.MANOUVERS, PageLocation.HOHMANN]}>
                        <Manouvers />
                    </HomeItem>

                    <HomeItem pageLocation={PageLocation.SIMULATION_RESULT}>
                        <SimulationResult />
                    </HomeItem>

                    <HomeItem pageLocation={PageLocation.ABOUT}>
                        <About />
                    </HomeItem>
                </div>

                <LoadingDialog open={openLoadingDialog}/>

                <AlertDialog
                    message={alertProps.message}
                    onClose={alertProps.onClose}
                    open={alertProps.open}
                    severity={alertProps.severity}
                />
            </HomeContext.Provider>
        </div>
    );
}