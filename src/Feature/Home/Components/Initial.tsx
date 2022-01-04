import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { PageLocation } from '../../../shared/enums/PageLocation';
import { HomeContext } from '../HomeContext';

export function Initial() {
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
                <code>level of complexity for the software</code>
            </Grid>
            
            <Grid item xs={12}>
                <Grid
                    container
                    direction='row'
                    justifyContent='center'
                    alignItems='center'
                    spacing={2}>
                    <Grid item xs={6}>
                        <Button 
                            fullWidth
                            variant='contained' 
                            color='primary'
                            size='large'
                            style={{textTransform: 'lowercase' }}
                            onClick={() => { homeContext.setPageLocation(PageLocation.WELCOME); }}>
                            <code>first</code> 
                        </Button>
                    </Grid>
                
                    <Grid item xs={6}>
                        <Button 
                            fullWidth
                            variant='contained' 
                            color='primary'
                            size='large'
                            style={{textTransform: 'lowercase' }}
                            onClick={() => { homeContext.setPageLocation(PageLocation.WELCOME); }}>
                            <code>second</code> 
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}