import React from 'react';
import Plot from 'react-plotly.js';

import { Grid, LinearProgress, Typography } from '@mui/material';
import { themeConfiguration } from '../../../themeConfiguration';
import { IPlanetProps } from '../../FirstSimulation/Const/PlanetList';
import SimulationService from '../../../Services/SimulationService';


export function SimulationResult() {
    const [planets, setPlanets] = React.useState<IPlanetProps[]>([]);
    const [loading, setLoading] = React.useState<boolean>(false);

    React.useEffect(() => {
        if (planets.length === 0) {
            setLoading(true);

            SimulationService.simulation()
                .getAll()
                .then((response) => {
                    if (response.data) {
                        setPlanets(response.data);
                    }
                })
                .catch((error) => {
                    console.log(error);
                    alert('fail');
                })
                .finally(() => setLoading(false));
        }
    }, []);

    const PageHeader = () => {
        return (
            <Grid
                item
                xs={12}
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={12}>
                    <Typography variant="h4">Carregando sistema solar...</Typography>
                </Grid>
            </Grid>
        );
    };

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={3}
            style={{ margin: themeConfiguration.spacing(3) }}
        >
            {loading && <PageHeader />}

            {loading && (
                <Grid item xs={12} style={{ width: '50%' }}>
                    <LinearProgress color="primary" />
                </Grid>
            )}

            {!loading && <Grid item xs={6}>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={3}
                >
                    <Plot
                        data={
                            planets.map((planets) => {
                                return {
                                    x: planets.bodyTrajectory.x,
                                    y: planets.bodyTrajectory.y,
                                    z: planets.bodyTrajectory.z,
                                    type: 'scatter3d',
                                    mode: 'lines',
                                    name: planets.namePTBR
                                };
                            }
                            )
                        }
                        layout={{width: 1000, height: 600, title: 'Sistema Solar'}}
                    />
                </Grid>
            </Grid>}
        </Grid>
    );
}
