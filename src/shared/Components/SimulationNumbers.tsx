import React from 'react';

import {
    TextField,
} from '@mui/material';

interface ISimulationNumbersProps {
    label: string;
    simulationNumber: number | undefined;
    setSimulationNumber: (numbers: number | undefined) => void; 
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
            value={simulationNumber ?? undefined}
            onChange={(e) => {
                let number = undefined;

                if (e.target.value) 
                    number = Number(e.target.value);

                setSimulationNumber(number);
            }}
            variant="outlined"
        />
    );
}
