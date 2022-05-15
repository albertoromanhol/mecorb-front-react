import { Button, Grid } from '@mui/material';
import * as React from 'react';
import { PageLocation } from '../../../shared/enums/PageLocation';
import { HomeContext } from '../../Home/HomeContext';
import { BiElliptic } from './BiElliptic/View/BiElliptic';
import { ComparationManouver } from './ComparationManouver/View/ComparationManouver';
import { Hohmann } from './Hohmann/View/Hohmann';

export function Manouvers() {
    const homeContext = React.useContext(HomeContext);

    const hohmannManouver = homeContext.pageLocation === PageLocation.HOHMANN;
    const biEllipticManouver = homeContext.pageLocation === PageLocation.BI_ELLIPTIC;
    const comparationManouver = homeContext.pageLocation === PageLocation.COMPARATION_MANOUVER;

    const notManouver = !hohmannManouver && !biEllipticManouver && !comparationManouver;

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
            
                <Grid item xs={12} style={{ width: '30%'}}>
                    <Button 
                        fullWidth
                        variant='contained' 
                        color='primary'
                        size='large'
                        style={{ height: '15vh'}}
                        onClick={() => homeContext.setPageLocation(PageLocation.HOHMANN)}>
                        <code>Hohmann</code> 
                    </Button>
                </Grid>
                
                <Grid item xs={12} style={{ width: '30%'}}>
                    <Button 
                        fullWidth
                        variant='contained' 
                        color='primary'
                        size='large'
                        style={{ height: '15vh'}}
                        onClick={() => homeContext.setPageLocation(PageLocation.BI_ELLIPTIC)}>
                        <code>Bi-Elliptic</code> 
                    </Button>
                </Grid>
                
                
                <Grid item xs={12} style={{ width: '30%'}}>
                    <Button 
                        fullWidth
                        variant='contained' 
                        color='primary'
                        size='large'
                        style={{ height: '15vh'}}
                        onClick={() => homeContext.setPageLocation(PageLocation.COMPARATION_MANOUVER)}>
                        <code>Comparação Hohmann e Bi-Elliptic</code> 
                    </Button>
                </Grid>
            </Grid>
        );
    };

    return (
        <>
            {notManouver && <Initial />}
            {hohmannManouver && <Hohmann />}
            {biEllipticManouver && <BiElliptic />}
            {comparationManouver && <ComparationManouver />}
        </>
    );
}