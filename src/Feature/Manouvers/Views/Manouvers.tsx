import { Button, Grid } from '@mui/material';
import * as React from 'react';
import { PageLocation } from '../../../shared/enums/PageLocation';
import { HomeContext } from '../../Home/HomeContext';
import { Hohmann } from './Hohmann/View/Hohmann';

export function Manouvers() {
    const homeContext = React.useContext(HomeContext);

    const hohmannManouver = homeContext.pageLocation === PageLocation.HOHMANN;

    const Initial = () => { 
        return (
            <Grid
                container
                direction='column'
                justifyContent='center'
                alignItems='center'
                spacing={5}
                style={{ minHeight: '100vh' }}>

                <Grid item xs={12}>
                    <code>Selecione a manobra que deseja realizar :)</code> 
                </Grid>
            
                <Grid item xs={12} style={{ width: '25%'}}>
                    <Button 
                        fullWidth
                        variant='outlined' 
                        color='primary'
                        size='large'
                        style={{ height: '15vh'}}
                        onClick={() => homeContext.setPageLocation(PageLocation.HOHMANN)}>
                        <code>Hohmann</code> 
                    </Button>
                </Grid>
                
            </Grid>
        );
    };

    return (
        <>
            {!hohmannManouver && <Initial />}
            {hohmannManouver && <Hohmann />}
        </>
    );
}