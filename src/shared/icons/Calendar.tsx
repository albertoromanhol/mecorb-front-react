import React from 'react';
import { SvgIcon } from '@mui/material';

import { IconProps } from './IconProps';
import { themeConfiguration } from '../../themeConfiguration';

export function Calendar({ size, color }: IconProps) {
    return (
        <SvgIcon
            viewBox={'0 0 24 24'}
            style={{ 
                width: size ?? '24px',
                height: size ?? '24px',
                fill: 'none'
            }}>
            <path
                stroke={color ?? themeConfiguration.palette.grey[700]}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
            />
            <path
                stroke={color ?? themeConfiguration.palette.grey[700]}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 2V6"
            />
            <path
                stroke={color ?? themeConfiguration.palette.grey[700]}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 2V6"
            />
            <path
                stroke={color ?? themeConfiguration.palette.grey[700]}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 10H21"
            />
        </SvgIcon>
    );
}
