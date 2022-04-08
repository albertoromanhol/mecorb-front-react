import React from 'react';

import { Divider, Grid, LinearProgress, Typography } from '@mui/material';
import { themeConfiguration } from '../../../themeConfiguration';
import { ShowPlanets } from '../Components/ShowPlanets';
import PlanetService from '../../../Services/PlanetService';
import { IPlanetProps } from '../Const/PlanetList';

export function FirstSimulation() {
    const [planets, setPlanets] = React.useState<IPlanetProps[]>([]);
    const [loading, setLoading] = React.useState<boolean>(false);

    React.useEffect(() => {
        if (planets.length === 0) {
            setLoading(true);

            PlanetService.planetsEphemerities()
                .getAll()
                .then((response) => {
                    console.log(response);
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
                    <Typography variant="h4">Simulação de dinâmica orbital</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1">
            Selecione os planetas que deseja simular
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body2">P2C: apenas a terra</Typography>
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
            <PageHeader />

            <Grid item xs={12} style={{ width: '50%' }}>
                <ShowPlanets planets={planets} />
            </Grid>
            {loading && (
                <Grid item xs={12} style={{ width: '100%' }}>
                    <LinearProgress color="primary" />
                </Grid>
            )}
            <Grid item xs={12}>
                <Typography variant="caption">
                    {'source: '}
                    <a
                        href="https://solarsystem.nasa.gov/planets/overview/"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
            https://solarsystem.nasa.gov/planets/overview/
                    </a>
                </Typography>
            </Grid>

            <Grid item xs={6}>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={3}
                >
                    {planets.map((planet, index) => {
                        return (
                            <>
                                <Grid key={`planet-${index}`} item xs={3}>
                                    <Grid
                                        container
                                        direction="row"
                                        justifyContent="start"
                                        alignItems="start"
                                    >
                                        <Grid item xs={12}>{`Id: ${planet.id}`}</Grid>
                                        <Grid
                                            item
                                            xs={12}
                                        >{`Nasa BodyId: ${planet.nasaHorizonBodyId}`}</Grid>
                                        <Grid item xs={12}>{`Name: ${planet.name}`}</Grid>
                                        <Grid item xs={12}>{`NamePTBR: ${planet.namePTBR}`}</Grid>
                                        <Grid item xs={12}>{`Mass: ${planet.mass}`}</Grid>
                                        <Grid item xs={12}>{`Radius: ${planet.radius}`}</Grid>
                                        <Grid item xs={1}>
                                            <Typography>{`Ephemerities: ${JSON.stringify(
                                                planet.ephemerities
                                            )}`}</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </>
                        );
                    })}
                </Grid>
            </Grid>
        </Grid>
    );
}
