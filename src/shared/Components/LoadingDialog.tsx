import React from 'react';
import { Dialog, CircularProgress } from '@mui/material';
import { themeConfiguration } from '../../themeConfiguration';

interface ILoadingDialogProps {
    open: boolean
}
  
export function LoadingDialog({open}: ILoadingDialogProps) {
  
    return (
        <Dialog 
            aria-labelledby="loading-dialog-title" 
            open={open} 
            PaperProps={{
                style: {
                    backgroundColor: 'transparent',
                    background: 'transparent',
                    boxShadow: 'none',
                },
            }}>
            <CircularProgress 
                size="124px" 
                style={{
                    margin: themeConfiguration.spacing(4),
                    textAlign: 'center',
                    color: themeConfiguration.palette.primary.light
                }}
            />  
        </Dialog>
    );
}