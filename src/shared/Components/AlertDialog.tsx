import React from 'react';
import { AxiosError } from 'axios';
import { IErrorResponse } from '../ErrorResponse';
import { ErrorHelper } from '../ErrorHelper';
import { Snackbar, Icon, Typography, Alert } from '@mui/material';

export interface IAlertDialogProps {
    open: boolean,
    severity: 'error'
    | 'info'
    | 'success'
    | 'warning',
    message: string | JSX.Element
    onClose?: () => void,
}

export const alertDialogPropsInitial: IAlertDialogProps =
{
    open: false,
    severity: 'success',
    message: '',
};

export function createAlertProps() {
    const [alertProps, setAlertProps] = React.useState<IAlertDialogProps>(alertDialogPropsInitial);

    React.useEffect(() => {
        if (!alertProps.onClose) {
            setAlertProps({ 
                ...alertProps,
                onClose: () => {
                    setAlertProps({
                        message: alertProps.message,
                        severity: alertProps.severity,
                        open: false,
                        onClose: () => { ''; } 
                    });
                }
            });
        }
    }, [alertProps]);

    const showError = (error: AxiosError, message: string) => {        
        const errorResponse: IErrorResponse = ErrorHelper(error);
        const errorMessages = errorResponse.message.split(/\r?\n/);

        setAlertProps({
            message: message + errorMessages[0],
            severity: 'error',
            open: true,
        });
    };
    
    const showSuccess = (message: string) => {
        setAlertProps({
            message: message,
            severity: 'success',
            open: true,
        });
    };
    
    const showWarning = (message: string) => {
        setAlertProps({
            message: message,
            severity: 'warning',
            open: true,
        });
    };

    return {
        alertProps: alertProps,
        setAlertProps: setAlertProps,
        showError: showError,
        showSuccess: showSuccess,
        showWarning: showWarning
    };
}

export function AlertDialog({ open, onClose, severity, message }: IAlertDialogProps) {
    const getIcon = () => {
        switch (severity) {
        case 'error': return 'close';
        case 'success': return 'done';
        case 'warning': return 'warning';
        default:
            return '';
        }
    };

    const getMessage = () => {
        if (typeof message == 'string')
            return message.split('<br/>').map((line) => { if (line) return <> {line} <br /> </>; });
        else
            return message;
    };

    return (
        <Snackbar 
            open={open} 
            onClose={onClose} 
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
            <Alert 
                variant="filled" 
                style={{
                    maxWidth: '350px',
                    border: '1px solid',
                }}
                elevation={6} 
                onClose={onClose} 
                severity={severity} 
                icon={<Icon className='material-icons-round' style={{ fontSize: '46px' }}>{getIcon()}</Icon>} >
                <Typography variant="body1">
                    {getMessage()}
                </Typography>
            </Alert>
        </Snackbar>
    );
}