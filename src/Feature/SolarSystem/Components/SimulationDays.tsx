import React from 'react';

import {
    Grid,
    TextField,
} from '@mui/material';

interface ISimulationDaysProps {
    simulationDays: number;
    setSimulationDays: (days: number) => void; 
}

export function SimulationDays({ simulationDays, setSimulationDays }: ISimulationDaysProps) {
    return (
        <Grid item xs={6} style={{ width: '100%' }}>
            <TextField
                label="Dias de simulação"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                fullWidth
                value={simulationDays}
                onChange={(e) => {
                    setSimulationDays(Number(e.target.value));
                }}
                variant="outlined"
            />
        </Grid>
    );
}
