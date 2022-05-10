import React from 'react';

import { Grid, Typography } from '@mui/material';
import { themeConfiguration } from '../../../themeConfiguration';
import { HomeContext } from '../../Home/HomeContext';
import { PlotResult } from '../Components/PlotResult';
import { ManouverVelocities } from '../Components/ManouverVelocities';


export function SimulationResult() {
    const homeContext = React.useContext(HomeContext);

    const hasResult = homeContext.simulationResult && homeContext.simulationResult?.planets.length > 0;

    console.log(homeContext.simulationResult);
    
    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={4}
            style={{ 
                margin: themeConfiguration.spacing(1), 
                width: '100%',
                minHeight: '95vh'
            }}>
            {hasResult ? 
                (homeContext.simulationResult && homeContext.simulationResult?.planets.length > 0 && (
                    <>
                        <Grid item xs={12}>
                            <PlotResult planets={homeContext.simulationResult?.planets} isManouver={homeContext.isManouver} />
                        </Grid>
                        {homeContext.isManouver && homeContext.simulationResult.deltaV && (
                            <ManouverVelocities deltaV={homeContext.simulationResult.deltaV} />
                        )}
                    </>
                ))
                :
                (
                    <Typography variant="h5" color="textPrimary">
                        Nenhum resultado encontrado.
                    </Typography>
                )
            }
        </Grid>
    );
}
