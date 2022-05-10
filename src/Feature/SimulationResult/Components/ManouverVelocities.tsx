import React from 'react';
import { Grid, Typography } from '@mui/material';

interface IManouverVelocitiesProps {
  deltaV: { [K: string]: number };
}

export function ManouverVelocities({ deltaV }: IManouverVelocitiesProps) {

    return (
        <Grid
            item
            xs={6}
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h5"><code>Velocidades de manobra</code></Typography>
            </Grid>
            <Grid item xs={12} style={{ width: '60%', textAlign: 'center'}}>
                {Object.keys(deltaV).map((value, index) => {
                    return (
                        <Typography variant="body1" key={`${value}-${index}`}>
                            <code>{`${value}: ${deltaV[value].toFixed(3)} km/s`}</code>
                        </Typography>
                    );
                })}
            </Grid>
        </Grid>
    );
}