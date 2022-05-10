import React from 'react';

import { Drawer, Grid, Divider } from '@mui/material';
import { DrawerHeader } from '../Components/DrawerHeader';
import { DrawerItensList } from '../Components/DrawerItensList';
import { DrawerConfiguration } from '../Components/DrawerConfiguration';
import { themeConfiguration } from '../../../themeConfiguration';

interface ISidebarProps {
    opened: boolean;
    setOpened: (opened: boolean) => void;
}

export function Sidebar({ opened, setOpened }: ISidebarProps) {
    return (
        <Drawer
            anchor='left'
            variant='persistent'
            PaperProps={{ elevation: 3 }}
            open={opened}>
            <Grid 
                container
                direction='column'
                justifyContent='space-between'
                alignItems='stretch'
                style={{
                    height: '100vh',
                    overflow: 'hidden',
                    width: themeConfiguration.spacing(25),
                }}>
                <Grid item>
                    <DrawerHeader setOpened={setOpened}/>
                    <DrawerItensList />
                    <Divider />
                </Grid>
                <Grid item>
                    <DrawerConfiguration />
                </Grid>
            </Grid>
        </Drawer>
    );
}