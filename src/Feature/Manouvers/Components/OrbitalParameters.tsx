import { Grid } from '@mui/material';
import * as React from 'react';
import { SimulationNumbers } from '../../../shared/Components/SimulationNumbers';

interface IOrbitalParametersProps {
    excentricity: number | undefined;
    setExcentricity: (excentricity: number | undefined) => void;
    majorSemiAxis: number | undefined;
    setMajorSemiAxis: (majorSemiAxis: number | undefined) => void;
}

export function OrbitalParameters({ excentricity, setExcentricity, majorSemiAxis, setMajorSemiAxis }: IOrbitalParametersProps) {
    return (
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
                    label="Excentricidade"
                    simulationNumber={excentricity}
                    setSimulationNumber={setExcentricity} />
            </Grid>
            <Grid item xs={12} md={6} style={{ width: '100%' }}>
                <SimulationNumbers
                    label="Semi-eixo maior [km]"
                    simulationNumber={majorSemiAxis}
                    setSimulationNumber={setMajorSemiAxis} />
            </Grid>
        </Grid>
    );
}
