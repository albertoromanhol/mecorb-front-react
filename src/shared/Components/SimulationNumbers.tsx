import React from 'react';

import {
    TextField,
} from '@mui/material';

interface ISimulationNumbersProps {
    label: string;
    simulationNumber: number;
    setSimulationNumber: (numbers: number) => void; 
}

export function SimulationNumbers({ label, simulationNumber, setSimulationNumber }: ISimulationNumbersProps) {
    return (
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
    );
}
