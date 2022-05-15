import React from 'react';

import { Grid, Typography } from '@mui/material';
import { themeConfiguration } from '../../../themeConfiguration';
import { HomeContext } from '../../Home/HomeContext';
import { PlotResult } from '../Components/PlotResult';

export function SimulationResult() {
    const homeContext = React.useContext(HomeContext);

    const hasResult = homeContext.simulationResult && homeContext.simulationResult?.planets.length > 0;

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={4}
            style={{ 
                margin: themeConfiguration.spacing(3), 
                width: '100%',
                minHeight: '90vh'
            }}>
            {hasResult ? 
                (homeContext.simulationResult && homeContext.simulationResult?.planets.length > 0 && (
                    <Grid item xs={12} style={{ width: '100%'}}>
                        <PlotResult 
                            planets={homeContext.simulationResult?.planets} 
                            isManouver={homeContext.isManouver} 
                            collision={homeContext.simulationResult.collision} />
                    </Grid>
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
