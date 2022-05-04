import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { PageHeader } from '../Components/PageHeader';
import { IOrbit } from '../../../../../Models/Orbit';
import { IManouverConfig } from '../../../../../Models/ManouverConfig';
import ManouverService from '../../../../../Services/ManouverService';
import { HomeContext } from '../../../../Home/HomeContext';
import { PageLocation } from '../../../../../shared/enums/PageLocation';
import { SimulationNumbers } from '../../../../../shared/Components/SimulationNumbers';
import { Orbit } from '../../Components/Orbit';

export function BiElliptic() {
    const homeContext = React.useContext(HomeContext);

    const [initialOrbit, setInitialOrbit] = React.useState<IOrbit>({
        excentricity: 0,
        majorSemiAxis: 7000,
    });

    const [finalOrbit, setFinalOrbit] = React.useState<IOrbit>({
        excentricity: 0,
        majorSemiAxis: 105_000,
    });

    const [firstBiEllipseApogge, setFirstBiEllipseApogge] = React.useState<number>(210_000);

    const startSimulation = () => {
        const manouverConfig: IManouverConfig = {
            initialOrbit,
            finalOrbit,
            firstBiEllipseApogge,
        };

        homeContext.setOpenLoadingDialog(true);
        ManouverService.biElliptic()
            .create(manouverConfig)
            .then((response) => {
                homeContext.setSimulationResult(response.data);
                homeContext.setIsManouver(true);
                homeContext.setPageLocation(PageLocation.SIMULATION_RESULT);
            })
            .catch((error) => {
                homeContext.showError(error, 'Não foi possível realizar simulação');
            })
            .finally(() => {
                homeContext.setOpenLoadingDialog(false);
            });
    // call function
    };

    const SimulationButton = () => (
        <Grid item xs={12}>
            <Button
                fullWidth
                size="large"
                variant="outlined"
                color="primary"
                onClick={startSimulation}
                style={{ height: '7vh' }}>
                SIMULAR
            </Button>
            <Typography variant="overline" style={{ textAlign: 'center' }}>
                <code>*TODO: Visualizar órbita antes de simular</code>
            </Typography>
        </Grid>
    );
    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={5}
            style={{ minHeight: '100vh' }}>
            <PageHeader />

            <Grid item xs={12} style={{ width: '50%' }}>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={3}>
                    <Orbit
                        orbit={initialOrbit}
                        setOrbit={setInitialOrbit}
                        label={'Orbita Inicial'}
                    />

                    <Orbit
                        orbit={finalOrbit}
                        setOrbit={setFinalOrbit}
                        label={'Orbita Final'}
                    />

                    <Grid item xs={12} style={{ width: '100%' }}>
                        <SimulationNumbers
                            label="Apogeu da primeira elípse de transferência"
                            simulationNumber={firstBiEllipseApogge}
                            setSimulationNumber={setFirstBiEllipseApogge}
                        />
                    </Grid>

                    <SimulationButton />
                </Grid>
            </Grid>
        </Grid>
    );
}
