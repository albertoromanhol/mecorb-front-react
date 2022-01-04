import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { PageLocation } from '../../../shared/enums/PageLocation';
import { HomeContext } from '../HomeContext';

export function Welcome() {
    const homeContext = React.useContext(HomeContext);

    return (
        <Grid
            container
            direction='column'
            justifyContent='center'
            alignItems='center'
            spacing={2}
            style={{ minHeight: '100vh' }}>
            <Grid item xs={12}>
                <code>desenvolvimento de um simulador de dinâmica orbital para fins educacionais</code>
            </Grid>
            
            <Grid item xs={12}>
            </Grid>

            <Grid item xs={12}>
                <code>aluno: alberto romanhol moreira</code> 
            </Grid>
            <Grid item xs={12}>
                <code>orientadora: maria cecília pereira de paula</code> 
            </Grid>
            
            <Grid item xs={12}>
            </Grid>

            <Grid item xs={12}>
                <code>universidade federal de minas gerais</code> 
            </Grid>

            <Grid item xs={12}>
            </Grid>
            <Grid item xs={12}>
            </Grid>
            
            <Grid item xs={12}>
                <Button 
                    fullWidth
                    variant='contained' 
                    color='primary'
                    size='large'
                    style={{textTransform: 'lowercase' }}
                    onClick={() => { homeContext.setPageLocation(PageLocation.INITAL); }}>
                    <code>to start, press the button</code> 
                </Button>
            </Grid>
        </Grid>
    );
}