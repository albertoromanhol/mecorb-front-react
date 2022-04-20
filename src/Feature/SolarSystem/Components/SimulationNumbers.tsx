import React from 'react';

import {
    Grid,
    TextField,
} from '@mui/material';

interface ISimulationNumbersProps {
    label: string;
    simulationNumber: number;
    setSimulationNumber: (numbers: number) => void; 
}

export function SimulationNumbers({ label, simulationNumber, setSimulationNumber }: ISimulationNumbersProps) {
    return (
        <Grid item xs={12} md={4} style={{ width: '100%' }}>
            <TextField
                label={label}
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                fullWidth
                value={simulationNumber}
                onChange={(e) => {
                    setSimulationNumber(Number(e.target.value));
                }}
                variant="outlined"
            />
        </Grid>
    );
}
