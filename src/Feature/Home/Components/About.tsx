import React from 'react';
import { Grid, Button } from '@mui/material';
import { PageLocation } from '../../../shared/enums/PageLocation';
import { HomeContext } from '../HomeContext';

export function About() {
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
                    variant='outlined' 
                    color='primary'
                    size='large'
                    style={{textTransform: 'lowercase', height: '10vh'}}
                    onClick={() => { homeContext.setPageLocation(PageLocation.INITAL); }}>
                    <code>tela inicial</code> 
                </Button>
            </Grid>
        </Grid>
    );
}