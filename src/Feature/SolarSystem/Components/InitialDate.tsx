import React from 'react';

import {
    Grid,
} from '@mui/material';
import { DateCalendar } from '../../../shared/Components/DateCalendar';

interface IInitialDateProps {
    dateValue: Date | null;
    setDateValue: (date: Date | null) => void;
}
export function InitialDate({ dateValue, setDateValue }: IInitialDateProps) {
    return (
        <Grid item xs={6} style={{ width: '100%' }}>
            <DateCalendar
                label='Data de Início'
                dateTime={dateValue} 
                setDateTime={setDateValue} />
        </Grid>
    );
}
