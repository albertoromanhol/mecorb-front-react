import React from 'react';
import { List } from '@mui/material';

interface IListComponentProps {
    children: JSX.Element | JSX.Element[];
}

export function ListComponent({ children }: IListComponentProps) {

    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            style={{
                width: '100%',
                maxWidth: 360,
                padding: 0
            }}>
            {children}
        </List>
    );
}