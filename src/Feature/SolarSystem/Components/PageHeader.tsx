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
            spacing={3}>
            <Grid item xs={12}>
                <Typography variant="h4"><code>Simulador do sistema solar</code></Typography>
            </Grid>
            <Grid item xs={12} style={{ width: '60%', textAlign: 'center'}}>
                <Typography variant="body1">
                    <code>Selecione quais planetas deseja simular, sendo o corpo de refêrencia o sol. Também é possível configurar a data de início da simulação e por quanto tempo será realizado a simulação.</code>
                </Typography>
            </Grid>
        </Grid>
    );
}