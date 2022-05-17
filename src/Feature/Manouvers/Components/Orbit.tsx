import React from 'react';

import { Grid, Typography } from '@mui/material';
import { IOrbit } from '../../../Models/Orbit';
import { OrbitalParameters } from './OrbitalParameters';

interface IOrbitProps {
  orbit: IOrbit;
  setOrbit: (orbit: IOrbit) => void;
  label: string;
}

export function Orbit({ orbit, setOrbit, label } : IOrbitProps) {
    return (
        <Grid
            item xs={12}
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h6"><code>{label}</code></Typography>
            </Grid>
            
            <OrbitalParameters
                excentricity={orbit.excentricity}
                setExcentricity={(excentricity: number | undefined) => setOrbit({ ...orbit, excentricity })}
                majorSemiAxis={orbit.majorSemiAxis}
                setMajorSemiAxis={(majorSemiAxis: number | undefined) => setOrbit({ ...orbit, majorSemiAxis })} />
        </Grid>
    );
}