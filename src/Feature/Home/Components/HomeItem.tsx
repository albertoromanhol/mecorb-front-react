import React, { ReactChild } from 'react';

import { PageLocation } from '../../../shared/enums/PageLocation';
import { HomeContext } from '../HomeContext';

interface IHomeItemProps {
    pageLocation?: PageLocation,
    pageLocationList?: PageLocation[],
    children: ReactChild
}

export function HomeItem({pageLocation, pageLocationList, children}: IHomeItemProps) {
    const homeContext = React.useContext(HomeContext);

    React.useEffect(() => { console.log(pageLocation); }, []);

    return (
        <>
            { !!pageLocation && homeContext.pageLocation === pageLocation && 
                children
            }
            { !!pageLocationList && pageLocationList.includes(homeContext.pageLocation) && 
                children
            }
        </> 
    );
}