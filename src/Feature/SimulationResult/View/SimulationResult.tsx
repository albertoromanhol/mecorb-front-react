import React from 'react';
import Plot from 'react-plotly.js';

import { Grid } from '@mui/material';
import { themeConfiguration } from '../../../themeConfiguration';
import { HomeContext } from '../../Home/HomeContext';


export function SimulationResult() {
    const homeContext = React.useContext(HomeContext);

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={3}
            style={{ margin: themeConfiguration.spacing(3) }}>
            {homeContext.simulationResult && homeContext.simulationResult?.planets.length > 0 && (<Plot
                data={
                    homeContext.simulationResult?.planets.map((planets) => {
                        return {
                            x: planets.bodyTrajectory.x,
                            y: planets.bodyTrajectory.y,
                            // z: planets.bodyTrajectory.z,
                            // type: 'scatter3d',
                            mode: 'lines',
                            name: planets.namePTBR
                        };
                    }
                    )
                }
                // width: '90%', height: '90%',
                layout={{ title: 'Sistema Solar',
                    autosize: false,
                    width: 1000,
                    height: 650,
                    hovermode: 'closest',
                    dragmode: 'pan'
                    // margin: {
                    //     l: 5,
                    //     r: 5,
                    //     b: 5,
                    //     t: 5
                    // }
                }}
                style={{
                    margin: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                config={{
                    responsive: true,
                    // scrollZoom: true,
                    // displayModeBar: false,
                    displaylogo: false,
                    modeBarButtonsToRemove: ['resetCameraLastSave3d']
                }}
            />)}
        </Grid>
    );
}
