import React from 'react';

import { CssBaseline, ThemeProvider } from '@material-ui/core';

import { themeConfiguration } from './themeConfiguration';
import { Routes } from './Routes';
 
export default function App() {     
    return (        
        <ThemeProvider theme={themeConfiguration}>   
            <CssBaseline /> 
            <Routes/>
        </ThemeProvider>       
    );
}
