import React from 'react';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { themeConfiguration } from './themeConfiguration';
import { Routes } from './Routes';
import AxiosSetting from './shared/AxiosSettings';
 
export default function App() {     
    return (        
        <ThemeProvider theme={themeConfiguration}>   
            <CssBaseline /> 
            <AxiosSetting/>
            <Routes/>
        </ThemeProvider>       
    );
}
