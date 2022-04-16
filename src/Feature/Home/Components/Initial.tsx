import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { PageLocation } from '../../../shared/enums/PageLocation';
import { HomeContext } from '../HomeContext';

interface IChooseButtonProps {
    label: string;
    pageLocation: PageLocation,
    disabled?: boolean,
}

export function Initial() {
    const homeContext = React.useContext(HomeContext);

    const ChooseButton = ({ label, pageLocation, disabled = false}: IChooseButtonProps) => {
        return (
            <Grid item xs={6}>
                <Button 
                    disabled={disabled}
                    fullWidth
                    variant='outlined' 
                    color='primary'
                    size='large'
                    style={{ height: '15vh'}}
                    onClick={() => { homeContext.setPageLocation(pageLocation); }}>
                    <code>{label}</code> 
                </Button>
            </Grid>
        );
    };

    
    const PageHeader = () => {
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
                    <Typography variant="h4"><code>Simulador de dinâmica orbital</code></Typography>
                </Grid>
                <Grid item xs={12} style={{ width: '60%', textAlign: 'center'}}>
                    <Typography variant="body1">
                        <code>Olá! Este simulador foi desenvolvido com o intuito de utilizar a Lei da Gravitação Universal para simular o movimento de um corpo celeste. Pode ser realizado simulações tanto do Sistema Solar, com quais planetas desejar. Bem como, a simulação de manobras orbitais (a ainda ser desenvolvido). <br/> Vamos nessa?</code>
                    </Typography>
                </Grid>
            </Grid>
        );
    };

    return (
        <Grid
            container
            direction='column'
            justifyContent='center'
            alignItems='center'
            spacing={5}
            style={{ minHeight: '100vh' }}>

            <PageHeader />

            <Grid item xs={12}>
                <Typography variant="h5">
                    <code>Por qual simulação deseja iniciar?</code>
                </Typography>
            </Grid>
            
            <Grid item xs={12}>
                <Grid
                    container
                    direction='row'
                    justifyContent='center'
                    alignItems='center'
                    spacing={3}>
                    <ChooseButton 
                        label='sistema solar'
                        pageLocation = {PageLocation.SOLAR_SYSTEM} />
                        
                    <ChooseButton 
                        disabled
                        label='manobras orbitais'
                        pageLocation = {PageLocation.MANOUVERS} />
                </Grid>
            </Grid>
        </Grid>
    );
}