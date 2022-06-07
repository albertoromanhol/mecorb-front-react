import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { PageHeader } from '../Components/PageHeader';
import { IOrbit } from '../../../../Models/Orbit';
import { IManouverConfig } from '../../../../Models/ManouverConfig';
import ManouverService from '../../../../Services/ManouverService';
import { HomeContext } from '../../../Home/HomeContext';
import { PageLocation } from '../../../../shared/enums/PageLocation';
import { SimulationNumbers } from '../../../../shared/Components/SimulationNumbers';
import { Orbit } from '../../Components/Orbit';
import { ManouverPreview } from '../../Components/ManouverPreview';
import { ISpacecraft } from '../../../../Models/Spacecraft';
import { Spacecraft } from '../../Components/Spacecraft';

export function ComparationManouver() {
    const homeContext = React.useContext(HomeContext);

    const [initialOrbit, setInitialOrbit] = React.useState<IOrbit>({
        excentricity: 0,
        majorSemiAxis: 10_000,
    });

    const [finalOrbit, setFinalOrbit] = React.useState<IOrbit>({
        excentricity: 0,
        majorSemiAxis: 50_000,
    });

    const [firstBiEllipseApogge, setFirstBiEllipseApogge] = React.useState<number | undefined>(600_000);
    
    const [spacecraft, setSpacecraft] = React.useState<ISpacecraft>({
        mass: 2000,
        isp: 300,
    });

    
    const startSimulation = () => {
        const manouverConfig: IManouverConfig = {
            initialOrbit,
            finalOrbit,
            firstBiEllipseApogge,
            spacecraft
        };

        homeContext.setOpenLoadingDialog(true);
        ManouverService.hohamannAndBiElliptic()
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
    };

    const SimulationButton = () => (
        <Grid item xs={12}>
            <Button
                fullWidth
                size="large"
                variant="contained"
                color="primary"
                onClick={startSimulation}
                style={{ height: '7vh' }}>
                <code>SIMULAR</code>
            </Button>
        </Grid>
    );
    return (
        <>
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
                            
                        <Spacecraft spacecraft={spacecraft} setSpacecraft={setSpacecraft} />
                        
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

                        <Grid
                            item xs={12}
                            container
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant="h6">
                                    <code>Órbita de transferência - Bielíptica</code>
                                </Typography>
                            </Grid>
                            
                            <Grid item xs={12} md={6} style={{ width: '100%' }}>
                                <SimulationNumbers
                                    label="Apogeu da primeira elípse de transferência bielíptica"
                                    simulationNumber={firstBiEllipseApogge}
                                    setSimulationNumber={setFirstBiEllipseApogge}
                                />
                            </Grid>
                        </Grid>

                        <SimulationButton />
                    </Grid>
                </Grid>
                
                <ManouverPreview
                    initialOrbit={initialOrbit}
                    finalOrbit={finalOrbit}
                />
            </Grid>
        </>
    );
}
