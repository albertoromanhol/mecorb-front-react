import React from 'react';
import { Grid, IconButton } from '@mui/material';

import SolarSystem from '../../../assets/SolarSystem.svg';
import { PageLocation } from '../../../shared/enums/PageLocation';
import { themeConfiguration } from '../../../themeConfiguration';
import { HomeContext } from '../../Home/HomeContext';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

interface IDrawerHeader {
    setOpened: (opened: boolean) => void;
}

export function DrawerHeader ({ setOpened }: IDrawerHeader) {
    const homeContext = React.useContext(HomeContext);

    return (
        <>
            <Grid item xs={12} style={{
                textAlign: 'end',
                margin: themeConfiguration.spacing(1),
            }}>
                <IconButton 
                    style={{ borderRadius: '16px' }}
                    onClick={ () => setOpened(false) }>
                    <ChevronLeftIcon />
                </IconButton>
            </Grid>
            <Grid item xs={12} style={{
                textAlign: 'center',
                marginBottom: themeConfiguration.spacing(2),
            }}>
                <IconButton 
                    style={{ borderRadius: '16px' }}
                    onClick={ () => homeContext.setPageLocation(PageLocation.INITAL) }>
                    <img 
                        height='44px'
                        src={SolarSystem} 
                        alt='Solar System' 
                    />
                </IconButton>
            </Grid>
        </>
    );
}