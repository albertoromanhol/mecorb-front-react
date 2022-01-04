import React from 'react';

import { makeStyles, createStyles } from '@material-ui/core';

import { PageLocation } from '../../shared/enums/PageLocation';
import { HomeItem } from './Components/HomeItem';
import { Welcome } from './Components/Welcome';
import { HomeContext } from './HomeContext';
import { Initial } from './Components/Initial';


const useStyles = makeStyles(() => createStyles({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
    }
}));


export function Home() {
    const classes = useStyles();
    
    const [pageLocation, setPageLocation] = React.useState<PageLocation>(PageLocation.WELCOME);

    return (
        <div className={classes.root}>
            <HomeContext.Provider value={{
                pageLocation, setPageLocation,
            }}>
                <HomeItem pageLocation={PageLocation.WELCOME}>
                    <Welcome />
                </HomeItem>
                
                <HomeItem pageLocation={PageLocation.INITAL}>
                    <Initial />
                </HomeItem>
            </HomeContext.Provider>
        </div>
    );
}