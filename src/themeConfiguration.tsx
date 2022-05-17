import { createMuiTheme } from '@mui/material';

export const themeConfiguration = createMuiTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#5e35b1',
        },
        secondary: {
            main: '#00acc1',
        },
        common: {
            black: '#0E0E0E',
            white: '#FFFFFF',
        },
        grey: {
            50: '#FAFAFA',
            200: '#E6E6E6',
            500: '#B6B6B6',
            700: '#6E6E6E',
            900: '#424242',
        },
        background: {
            default: '#121212',
        },
    },
    typography : { 
        fontFamily: 'Roboto',
        h1 : {
            fontFamily: 'Roboto',
            fontWeight: 700, 
            fontSize: '6rem',
            lineHeight: '7rem',
            letterSpacing: '0rem'
        },
        h2 : {
            fontFamily: 'Roboto',
            fontWeight: 700, 
            fontSize: '3.75rem',
            lineHeight: '4.5rem',
            letterSpacing: '0rem'
        },
        h3 : {
            fontFamily: 'Roboto',
            fontWeight: 700, 
            fontSize: '3rem',
            lineHeight: '3.5rem',
            letterSpacing: '0rem'
        },
        h4 : {
            fontFamily: 'Roboto',
            fontWeight: 700, 
            fontSize: '2.125rem',
            lineHeight: '2.25rem',
            letterSpacing: '0rem'
        },
        h5 : { 
            fontFamily: 'Roboto',
            fontWeight: 700, 
            fontSize: '1.5rem',
            lineHeight: '1.5rem',
            letterSpacing: '0rem'
        },
        h6 : {
            fontFamily: 'Roboto',
            fontWeight: 700, 
            fontSize: '1.25rem',
            lineHeight: '1.5rem',
            letterSpacing: '0rem'
        },
        subtitle1 : { 
            fontFamily: 'Roboto',
            fontWeight: 600, 
            fontSize: '1rem',
            lineHeight: '1.5rem',
            letterSpacing: '0.02rem'
        },
        subtitle2 : {
            fontFamily: 'Roboto',
            fontWeight: 400, 
            fontSize: '0.875rem',
            lineHeight: '1.5rem',
            letterSpacing: '0.02rem'
        },
        body1 : { 
            fontFamily: 'Roboto',
            fontWeight: 400, 
            fontSize: '1rem',
            lineHeight: '1.5rem',
            letterSpacing: '0.02rem'
        },
        body2 : {
            fontFamily: 'Roboto',
            fontWeight: 400, 
            fontSize: '0.875rem',
            lineHeight: '1.25rem',
            letterSpacing: '0.02rem'
        },
        button : {
            fontFamily: 'Roboto',
            fontWeight: 600, 
            fontSize: '1rem',
            lineHeight: '1rem',
            letterSpacing: '0.08rem'
        },
        caption : {
            fontFamily: 'Roboto',
            fontWeight: 400, 
            fontSize: '0.75rem',
            lineHeight: '1rem',
            letterSpacing: '0.025rem'
        },
        overline : {
            fontFamily: 'Roboto',
            fontWeight: 700, 
            fontSize: '0.625rem',
            lineHeight: '1rem',
            letterSpacing: '0.1rem'
        }
    },
});