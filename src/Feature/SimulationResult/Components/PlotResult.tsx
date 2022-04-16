import React from 'react';
import { Grid } from '@mui/material';
import { Data } from 'plotly.js';
import Plot from 'react-plotly.js';

import { IPlanet } from '../../../Models/Planet';
import { IPlotData } from '../Models/PlotData';
import { PlotConfig } from './PlotConfig';
import useWindowDimensions from '../../../shared/operators';

interface IPlotResultProps {
  planets: IPlanet[];
}


export function PlotResult({ planets }: IPlotResultProps) { 
    
    const [plotData, setPlotData] = React.useState<IPlotData[]>([]);
    const [tridimensionalPlot, setTridimensionalPlot] = React.useState<boolean>(false);

    const { height, width } = useWindowDimensions();

    React.useEffect(() => { 
        setPlanetsData();
    }, [planets, tridimensionalPlot]);

    const setPlanetsData = () => {
        const data = planets.map(planet => getPlanetData(planet));
        setPlotData(data);
    };

    const getPlanetData = (planet: IPlanet) => {
        const data : IPlotData = {
            x: planet.bodyTrajectory.x,
            y: planet.bodyTrajectory.y,
            name: planet.namePTBR,
            mode: 'lines',
        };

        if (tridimensionalPlot) {
            data.z = planet.bodyTrajectory.z;
            data.type = 'scatter3d';
        }

        return (data);
    };

    return (
        <Grid
            item xs={12}
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            style={{ width: '100%'}}>
            <Grid item xs={2}>
                <PlotConfig 
                    tridimensionalPlot={tridimensionalPlot}
                    setTridimensionalPlot={setTridimensionalPlot} />
            </Grid>
            <Grid item xs={10}>
                <Plot
                    data={plotData as Data[]}
                    layout={{ title: 'Sistema Solar',
                        autosize: false,
                        width: 0.7 * width,
                        height: 0.8 * height,
                        hovermode: 'closest',
                        dragmode: 'pan',
                        xaxis: {
                            scaleratio: 1,
                            title: {
                                text: 'X [km]',
                            },
                        },
                        yaxis: {
                            scaleratio: 1,
                            scaleanchor: 'x',
                            title: {
                                text: 'Y [km]',
                            },
                        },
                    }}
                    style={{
                        margin: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                    config={{
                        // responsive: true,
                        displaylogo: false,
                        // modeBarButtonsToRemove: ['resetCameraLastSave3d']
                    }}
                />
            </Grid>
        </Grid>
    );
}