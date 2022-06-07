import React from 'react';
import { Grid, Typography } from '@mui/material';

interface IManouverVelocitiesProps {
  deltaV: { [K: string]: number };
}

export function ManouverVelocities({ deltaV }: IManouverVelocitiesProps) {

    return (
        <Grid
            item
            xs={12}
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}>
            <Grid item xs={12}>
                <Typography style={{ fontWeight: 700 }}><code>Deltas de Manobras</code></Typography>
            </Grid>
            <Grid item xs={12} style={{ textAlign: 'center'}}>
                {Object.keys(deltaV).map((value, index) => {
                    const isMass = value.includes('M');
                    const valueNumer = isMass ? deltaV[value].toFixed(1) : deltaV[value].toFixed(4);
                    const valueUnit = isMass ? 'kg' : 'km/s';
                    
                    return (
                        <Typography variant="body1" key={`${value}-${index}`}>
                            <code>{value ? `${value}: ${valueNumer}  ${valueUnit}` : '————'}</code>
                        </Typography>
                    );
                })}
            </Grid>
        </Grid>
    );
}