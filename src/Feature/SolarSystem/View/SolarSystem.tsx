import React from 'react';

import { Button, Grid, LinearProgress } from '@mui/material';
import { SelectPlanets } from '../Components/SelectPlanets';
import PlanetService from '../../../Services/PlanetService';
import { IPlanet } from '../../../Models/Planet';
import { PageHeader } from '../Components/PageHeader';
import { InitialDate } from '../Components/InitialDate';
import { SimulationDays } from '../Components/SimulationDays';
import { ISimulationConfig } from '../../../Models/SimulationConfig';
import SimulationService from '../../../Services/SimulationService';
import { HomeContext } from '../../Home/HomeContext';
import { PageLocation } from '../../../shared/enums/PageLocation';

export function SolarSystem() {
    const homeContext = React.useContext(HomeContext);

    const [loading, setLoading] = React.useState<boolean>(false);

    const [planets, setPlanets] = React.useState<IPlanet[]>([]);
    const [planetsSelected, setPlanetsSelected] = React.useState<IPlanet[]>([]);
    const [dateValue, setDateValue] = React.useState<Date | null>(new Date());
    const [simulationDays, setSimulationDays] = React.useState<number>(365);

    React.useEffect(() => {
        if (planets.length === 0) {
            fetchPlanets();
        }
    }, []);
    
    const fetchPlanets = () => {
        setLoading(true);

        PlanetService.planets()
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
            .finally(() => { setLoading(false); });
    };

    const startSimulation = () => {
        const simulationConfig = {
            planets: planetsSelected,
            initialDay: dateValue,
            simulationDays: simulationDays,
        } as ISimulationConfig;

        // TODO: LOADING
        SimulationService
            .simulation()
            .create(simulationConfig)
            .then((response) => {
                homeContext.setSimulationResult(response.data);
                homeContext.setPageLocation(PageLocation.SIMULATION_RESULT);
            })
            .catch((error) => {
                console.log(error);
                alert('fail');
            })
            .finally(() => { setLoading(false); });
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
        </Grid>
    );


    return (
        <Grid
            container
            direction='column'
            justifyContent='center'
            alignItems='center'
            spacing={5}
            style={{ minHeight: '100vh' }}>

            <PageHeader />
            
            {loading && (
                <Grid item xs={12} style={{ width: '50%' }}>
                    <LinearProgress color="primary" />
                </Grid>
            )}

            {!loading && (
                <Grid item xs={12} style={{ width: '50%' }}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}>
                        <SelectPlanets 
                            planets={planets}
                            planetsSelected={planetsSelected}
                            setPlanetsSelected={setPlanetsSelected} />
                        <InitialDate
                            dateValue={dateValue}
                            setDateValue={setDateValue} />
                        <SimulationDays
                            simulationDays={simulationDays}
                            setSimulationDays={setSimulationDays} />
                        <SimulationButton />

                    </Grid>
                   
                </Grid>
            )}

        </Grid>
    );
}
