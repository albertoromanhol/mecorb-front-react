import React from 'react';
import { Grid } from '@mui/material';

import { PageLocation } from '../../../shared/enums/PageLocation';
import { ListComponent } from './ListComponent';
import { MenuItemComponent } from './MenuItemComponent';

export function DrawerItensList() {
    return (
        <Grid
            container
            direction='column'
            alignItems='center'
            style={{
                maxHeight: '45vh',
                overflowY: 'auto',
            }}>
            <ListComponent>
                <>
                    <MenuItemComponent
                        pageLocation={PageLocation.SOLAR_SYSTEM}
                        menuTitle='Sistema Solar'
                    />
                    <MenuItemComponent
                        disabled
                        pageLocation={PageLocation.MANOUVERS}
                        menuTitle='Manobras'
                    />

                </>
            </ListComponent>
        </Grid>
    );
}