import React from 'react';

import { Grid, Typography } from '@mui/material';

export function PageHeader() {
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
                <Typography variant="h4"><code>Manobra de Bielíptica</code></Typography>
            </Grid>
            <Grid item xs={12} style={{ width: '60%', textAlign: 'center'}}>
                <Typography variant="body1">
                    <code>Defina a orbita inicial e final para manobra em torno da Terra, bem como o raio do apogeu da primeira elípse de transferência</code>
                </Typography>
            </Grid>
        </Grid>
    );
}