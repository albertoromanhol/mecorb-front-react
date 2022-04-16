import React from 'react';
import { Grid } from '@mui/material';

import { PageLocation } from '../../../shared/enums/PageLocation';
import { ListComponent } from './ListComponent';
import { MenuItemComponent } from './MenuItemComponent';

export function DrawerConfiguration () {
    return (
        <Grid
            container
            direction='column'
            justifyItems='center'
            alignItems='center'>
            <ListComponent>
                <>
                    <MenuItemComponent
                        pageLocation={PageLocation.ABOUT}
                        menuTitle='Sobre'
                    />
                </>
            </ListComponent>
        </Grid>
    );
}