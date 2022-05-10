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
  isManouver: boolean;
}

export function PlotResult({ planets, isManouver }: IPlotResultProps) { 
    const { height, width } = useWindowDimensions();

    const [plotData, setPlotData] = React.useState<IPlotData[]>([]);
    const [tridimensionalPlot, setTridimensionalPlot] = React.useState<boolean>(false);
    const [maxTrajectoryValue, setMaxTrajectoryValue] = React.useState<number>(0);

    const EARTH_RADIUS = 6_378;
    const SUN_RADIUS = 696_340;
    
    React.useEffect(() => { 
        setPlanetsData();
    }, [planets, tridimensionalPlot]);

    const setPlanetsData = () => {
        setTrajectoryMaxValue();

        const data = planets.map(planet => getPlanetData(planet));
        if (!tridimensionalPlot) {
            
            const centerBodyRadius = isManouver ? EARTH_RADIUS : SUN_RADIUS;

            const xCenterBody = [];
            const yCenterBody = [];

            for (let angle = 0; angle <= 360; angle++) {
                const x = centerBodyRadius*Math.sin(Math.PI*angle/180);
                const y = centerBodyRadius*Math.cos(Math.PI*angle/180);
                
                xCenterBody.push(x);
                yCenterBody.push(y);
            }
            
            const centerBody = {
                x: xCenterBody,
                y: yCenterBody,
                mode: 'lines',
                name:  isManouver ? 'Terra' : 'Sol',
                fill: 'toself',
            };

            data[0] = centerBody;
        
        }
        setPlotData(data);
    };

    const setTrajectoryMaxValue = () => {
        const maxId = planets.reduce((max, planet) => planet.id > max ? planet.id : max, 0);

        const planetIndex = planets.findIndex(planet => planet.id === maxId);
        
        if (planetIndex && planetIndex > 0) {
            const maxX = planets[planetIndex].trajectory.x.reduce((max, x) => x > max ? x : max, 0);
            const maxY = planets[planetIndex].trajectory.y.reduce((max, y) => y > max ? y : max, 0);

            const absoluteMaxValue = Math.abs(Math.max(maxX, maxY));

            const minX = planets[planetIndex].trajectory.x.reduce((min, x) => x < min ? x : min, maxX);
            const minY = planets[planetIndex].trajectory.y.reduce((min, y) => y < min ? y : min, maxY);

            const absoluteMinValue = Math.abs(Math.min(minX, minY));
            
            setMaxTrajectoryValue(Math.max(absoluteMaxValue, absoluteMinValue)*1.1);
        }
    };

    const getPlanetData = (planet: IPlanet) => {
        const data : IPlotData = {
            x: planet.trajectory.x,
            y: planet.trajectory.y,
            name: planet.namePTBR,
            mode: 'lines',
        };

        if (planet.namePTBR.includes('Transferência')) {
            data.line = {
                dash: 'dot',
            };
        }

        if (tridimensionalPlot) {
            data.z = planet.trajectory.z;
            data.type = 'scatter3d';
        }

        return data;
    };

    const manouverName = planets.length === 4 ? 'Manobra de Hohmann' : 'Manobra bielíptica';

    return (
        <Grid
            item xs={12}
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            style={{ width: '100%'}}>
            {!isManouver && 
            <Grid item xs={12} sm={2}>
                <PlotConfig 
                    tridimensionalPlot={tridimensionalPlot}
                    setTridimensionalPlot={setTridimensionalPlot} />
            </Grid>}
            <Grid item xs={12} sm={10}>
                <Plot
                    data={plotData as Data[]}
                    layout={{ title: isManouver ? manouverName : 'Sistema Solar',
                        autosize: false,
                        width: isManouver ? 0.6 * width : 0.7 * width,
                        height: isManouver ? 0.7 * height : 0.8 * height,
                        hovermode: 'closest',
                        dragmode: 'pan',
                        scene: {
                            aspectmode:'manual',
                            aspectratio: {
                                x: 2, 
                                y: 2, 
                                z: 0.1
                            },
                            camera: {
                                center: {
                                    x: 0, y: 0, z: -.3
                                }
                            },
                            xaxis: {
                                title: 'X [km]',
                                range: [-maxTrajectoryValue, maxTrajectoryValue]
                            },
                            yaxis: {
                                title: 'Y [km]',
                                range: [-maxTrajectoryValue, maxTrajectoryValue]
                            },
                            zaxis: {
                                nticks: 1,
                                title: 'Z [km]',
                            }
                        },
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
                        displaylogo: false,
                    }}
                />
            </Grid>
        </Grid>
    );
}