import { Button, Grid } from '@mui/material';
import * as React from 'react';

export function Manouvers() {
    return (
        <Grid
            container
            direction='column'
            justifyContent='center'
            alignItems='center'
            spacing={5}
            style={{ minHeight: '100vh' }}>
            <code>Selecione a manobra que deseja realizar :)</code> 
            <code>em breve, Manobra de Hohmann</code> 
            
            <Grid item xs={12} >
                <Button 
                    disabled
                    // fullWidth
                    variant='outlined' 
                    color='primary'
                    size='large'
                    style={{ height: '15vh'}}
                >
                    <code>Hohmann</code> 
                </Button>
            </Grid>
        </Grid>
    );
}