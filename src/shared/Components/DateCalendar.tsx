import React from 'react';

import { TextField, TextFieldProps } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import ptBR from 'date-fns/locale/pt-BR';

interface IDateCalendarProps {
    label: string
    dateTime: Date | null,
    setDateTime: (date: Date | null) => void,
}

export function DateCalendar({
    label,
    dateTime,
    setDateTime,
}: IDateCalendarProps) {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={ptBR}>
            <DatePicker
                label={label}
                value={dateTime}
                onChange={(newValue) => {
                    setDateTime(newValue);
                }}
                disableFuture
                renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => <TextField fullWidth {...params} />}
            />
        </LocalizationProvider>
    );
}