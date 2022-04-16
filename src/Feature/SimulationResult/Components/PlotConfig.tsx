import React from 'react';
import { Grid, Typography, Button, Paper, Divider } from '@mui/material';
import { themeConfiguration } from '../../../themeConfiguration';

interface IPlotConfig {
  tridimensionalPlot: boolean;
  setTridimensionalPlot: (value: boolean) => void;
}

export function PlotConfig({
    tridimensionalPlot,
    setTridimensionalPlot,
}: IPlotConfig) {
    return (
        <Paper
            style={{
                padding: themeConfiguration.spacing(3),
                width: '100%',
                marginRight: themeConfiguration.spacing(3),
            }}
        >
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={1}
            >
                <Grid item xs={12}>
                    <Typography >
                        <code>Configurações</code>
                    </Typography>
                </Grid>
                <Grid item xs={12} style={{ width: '100%'}}>
                    <Divider />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='subtitle2'>
                        <code>Tipo de gráfico</code>
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                    >
                        <Grid item xs={6}>
                            <Button
                                variant={tridimensionalPlot ? 'contained' : 'outlined'}
                                color="primary"
                                onClick={() => setTridimensionalPlot(true)}
                                style={{ minWidth: '36px'}}
                            >
                                <Typography>
                                    <code>3D</code>
                                </Typography>
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button
                                variant={!tridimensionalPlot ? 'contained' : 'outlined'}
                                color="primary"
                                onClick={() => setTridimensionalPlot(false)}
                                style={{ minWidth: '36px'}}
                            >
                                <Typography>
                                    <code>2D</code>
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} style={{ width: '100%'}}>
                    <Divider />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        variant='outlined'
                        color="primary"
                        disabled
                        onClick={() => setTridimensionalPlot(true)}
                    >
                        <Typography variant='overline'>
                            <code>EXPORTAR CSV</code>
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );
}
