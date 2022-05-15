import React from 'react';
import {
    Typography,
    ListItem,
    Grid,
} from '@mui/material';

import { HomeContext } from '../../Home/HomeContext';
import { PageLocation } from '../../../shared/enums/PageLocation';
import { themeConfiguration } from '../../../themeConfiguration';

interface IMenuItemProps {
  menuTitle: string;
  pageLocation: PageLocation;
  childPages?: PageLocation[],
  disabled?: boolean;
}

export function MenuItemComponent({
    menuTitle,
    pageLocation,
    childPages,
    disabled = false,
}: IMenuItemProps) {
    const homeContext = React.useContext(HomeContext);

    const [backgroundColor, setBackgroundColor] = React.useState('');

    React.useEffect(() => {
        changeBackgroundColor();
    }, [homeContext.pageLocation]);
    
    const changeBackgroundColor = (color?: string) => {
        if (homeContext.pageLocation === pageLocation || (childPages && childPages.includes(homeContext.pageLocation))) {
            setBackgroundColor(themeConfiguration.palette.primary.main);
            return;
        }

        if (color) {
            setBackgroundColor(color);
            return;
        }

        setBackgroundColor('');
    };

    const getMenuTitle = () => {
        return (
            <Typography variant="subtitle1" style={{
                verticalAlign: 'middle',
            }}>
                <code>{menuTitle}</code>
            </Typography>
        );
    };

    const principalMenuItem = () => {
        return (
            <ListItem 
                button 
                disabled={disabled}
                style={{
                    height: themeConfiguration.spacing(6),
                }}>
                <Grid
                    container
                    direction="row"
                    justifyItems="flex-start"
                    alignItems="center">
                    <Grid item xs={12}>
                        {getMenuTitle()}
                    </Grid>
                </Grid>
            </ListItem>
        );
    };

    return (
        <div
            style={{
                backgroundColor: backgroundColor,
            }}
            onClick={() => { 
                homeContext.setPageLocation(pageLocation);
            }}
            onMouseOver={() => {
                changeBackgroundColor(themeConfiguration.palette.primary.light);
            }}
            onMouseLeave={() => { changeBackgroundColor(); }}>
            {principalMenuItem()}
        </div>
    );
}
