import React from 'react';
import { Grid, Typography, Button, Paper, Divider } from '@mui/material';
import { themeConfiguration } from '../../../themeConfiguration';
import { HomeContext } from '../../Home/HomeContext';
import { ManouverVelocities } from './ManouverVelocities';

interface IPlotConfig {
    isManouver: boolean;
    collision: string[] | undefined;
    tridimensionalPlot: boolean;
    setTridimensionalPlot: (value: boolean) => void;
}

export function PlotConfig({
    isManouver,
    collision,
    tridimensionalPlot,
    setTridimensionalPlot,
}: IPlotConfig) {
    const homeContext = React.useContext(HomeContext);
    const [download, setDownload] = React.useState<boolean>(false);

    React.useEffect(() => { 
        if (download) {
            downloadCVSPlanetsTrajectory();
            setDownload(false);
        }
    }, [download]);
 
    const downloadCVSPlanetsTrajectory = () => {
        homeContext.setOpenLoadingDialog(true);

        const numberOfLinesInTrajectory = homeContext.simulationResult?.trajectoryPoints ?? 0;

        let csvContent = 'time,';
        const header = 'body,x,y,z,'.repeat(homeContext.simulationResult?.planets.length ?? 0).slice(0, -1);

        csvContent += header + '\n';
        
        for (let index = 0; index < numberOfLinesInTrajectory; index++) {
            csvContent += `${homeContext.simulationResult?.time[index]},`;

            homeContext.simulationResult?.planets.forEach((planet) => {
                csvContent += `${planet.name},${planet.trajectory.x[index] ?? 0},${planet.trajectory.y[index] ?? 0},${planet.trajectory.z[index] ?? 0},`;
            });

            csvContent = csvContent.slice(0, -1) + '\n';
        }

        if (csvContent.trim() !== '') {
            const file = new Blob([csvContent], { type: 'csv;charset=utf-8;' });
            const link = document.createElement('a');
            link.setAttribute('href', URL.createObjectURL(file));
            link.setAttribute('download', `${isManouver ? 'manobra' : 'trajetoria'}.csv`);
            link.click();

            homeContext.showSuccess('Arquivo baixado com sucesso!');
        }
        
        homeContext.setOpenLoadingDialog(false);
    };
    
    
    const DimensionSelector = () => {
        return (
            <>
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
            </>
        );
    };
    
    return (
        <Paper
            style={{
                borderRadius: 16, 
                padding: themeConfiguration.spacing(3),
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
                {!isManouver && <DimensionSelector />}
                <Grid item xs={12} style={{ width: '100%'}}>
                    <Divider />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        variant='outlined'
                        color="primary"
                        size="large"
                        style={{ height: '7vh'}}
                        onClick={() => setDownload(true)}
                    >
                        <code>EXPORTAR DADOS (CSV)</code>
                    </Button>
                </Grid>
                {collision && collision.length > 0 && (
                    <>
                        <Grid item xs={12} style={{ width: '100%'}}>
                            <Divider />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography color='red'>
                                <code>Colisão!</code>
                            </Typography>
                        </Grid>
                        {collision.map(name => (
                            <Grid item xs={12} key={`colision-${name}`} style={{ textAlign: 'center'}}>
                                <code>{name}</code>
                            </Grid>
                        ))
                        }
                    </>
                )
                }
                {isManouver && homeContext.simulationResult?.deltaV && (
                    <>
                        <Grid item xs={12} style={{ width: '100%'}}>
                            <Divider />
                        </Grid>
                        <ManouverVelocities deltaV={homeContext.simulationResult.deltaV} />
                    </>
                )}
            </Grid>
        </Paper>
    );
}
