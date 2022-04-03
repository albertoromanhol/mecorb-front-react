import React from 'react';
import { Button, Grid } from '@mui/material';
import { PageLocation } from '../../../shared/enums/PageLocation';
import { HomeContext } from '../HomeContext';

interface IChooseButtonProps {
    label: string;
    pageLocation: PageLocation,
}

export function Initial() {
    const homeContext = React.useContext(HomeContext);

    const ChooseButton = ({ label, pageLocation }: IChooseButtonProps) => {
        return (
            <Grid item xs={6}>
                <Button 
                    fullWidth
                    variant='contained' 
                    color='primary'
                    size='large'
                    style={{textTransform: 'lowercase', height: '15vh'}}
                    onClick={() => { homeContext.setPageLocation(pageLocation); }}>
                    <code>{label}</code> 
                </Button>
            </Grid>
        );
    };

    return (
        <Grid
            container
            direction='column'
            justifyContent='center'
            alignItems='center'
            spacing={3}
            style={{ minHeight: '100vh' }}>
            <Grid item xs={12}>
                <code>qual simulação deseja realizar?</code>
            </Grid>
            
            <Grid item xs={12}>
                <Grid
                    container
                    direction='row'
                    justifyContent='center'
                    alignItems='center'
                    spacing={3}>
                    <ChooseButton 
                        label='dinâmica orbital'
                        pageLocation = {PageLocation.FIRST_SIMULATION} />
                        
                    <ChooseButton 
                        label='manobras impulsivas'
                        pageLocation = {PageLocation.SECOND_SIMULATION} />
                </Grid>
            </Grid>
        </Grid>
    );
}