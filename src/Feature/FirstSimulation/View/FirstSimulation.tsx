import React from 'react';

import { Grid, Typography } from '@mui/material';
import { themeConfiguration } from '../../../themeConfiguration';
import { ShowPlanets } from '../Components/ShowPlanets';

export function FirstSimulation(){

    const PageHeader = () => {
        return (
            <Grid
                item xs={12}
                container
                direction='column'
                justifyContent='center'
                alignItems='center'>
                <Grid item xs={12}>
                    <Typography variant='h4'>Simulação de dinâmica orbital</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='body1'>Selecione os planetas que deseja simular</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='body2'>P2C: apenas a terra</Typography>
                </Grid>
            </Grid>
        );
    };
    
    return(
        <Grid
            container
            direction='column'
            justifyContent='center'
            alignItems='center'
            spacing={3}
            style={{ margin: themeConfiguration.spacing(3) }}> 

            <PageHeader />
            
            <Grid item xs={12} style={{ width: '50%'}}>
                <ShowPlanets />
            </Grid>

            <Grid item xs={12}>
                <Typography variant='caption'>
                    {'source: '}  
                    <a  
                        href='https://solarsystem.nasa.gov/planets/overview/'
                        target="_blank" rel="noreferrer noopener">
                         https://solarsystem.nasa.gov/planets/overview/
                    </a>
                </Typography>
            </Grid>
        </Grid>
    );
}