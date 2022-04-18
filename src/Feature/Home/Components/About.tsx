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
                <code>Desenvolvimento de um Simulador de Dinâmica Orbital Para Fins Educacionais</code>
            </Grid>
            
            <Grid item xs={12}>
            </Grid>

            <Grid item xs={12}>
                <code>Aluno: Alberto Romanhol Moreira</code> 
            </Grid>
            <Grid item xs={12}>
                <code>Orientadora: Maria Cecília Pereira de Paula</code> 
            </Grid>
            
            <Grid item xs={12}>
            </Grid>

            <Grid item xs={12}>
                <code>Universidade Federal de Minas Gerais</code> 
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