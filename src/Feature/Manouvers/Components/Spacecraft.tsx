import React from 'react';

import { Grid, Typography } from '@mui/material';
import { SimulationNumbers } from '../../../shared/Components/SimulationNumbers';
import { ISpacecraft } from '../../../Models/Spacecraft';

interface IOrbitProps {
  spacecraft: ISpacecraft;
  setSpacecraft: (spacecraft: ISpacecraft) => void;
}

export function Spacecraft({ spacecraft, setSpacecraft } : IOrbitProps) {
    return (
        <Grid
            item xs={12}
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h6"><code>Dados do corpo de manobra</code></Typography>
            </Grid>
            
            <Grid
                item
                xs={12}
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}>
                <Grid item xs={12} md={6} style={{ width: '100%' }}>
                    <SimulationNumbers
                        label="Massa [kg]"
                        simulationNumber={spacecraft.mass}
                        setSimulationNumber={(mass: number | undefined) => setSpacecraft({ ...spacecraft, mass })} />
                </Grid>
                <Grid item xs={12} md={6} style={{ width: '100%' }}>
                    <SimulationNumbers
                        label="Impulso específico [s]"
                        simulationNumber={spacecraft.isp}
                        setSimulationNumber={(isp: number | undefined) => setSpacecraft({ ...spacecraft, isp })} />
                </Grid>
            </Grid>
        </Grid>
    );
}