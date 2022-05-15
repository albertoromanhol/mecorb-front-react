import React from 'react';
import { Button, Grid } from '@mui/material';
import { PageHeader } from '../Components/PageHeader';
import { IOrbit } from '../../../../../Models/Orbit';
import { Orbit } from '../../Components/Orbit';
import { IManouverConfig } from '../../../../../Models/ManouverConfig';
import ManouverService from '../../../../../Services/ManouverService';
import { HomeContext } from '../../../../Home/HomeContext';
import { PageLocation } from '../../../../../shared/enums/PageLocation';
import { ManouverPreview } from '../../Components/ManouverPreview';


export function Hohmann() {
    const homeContext = React.useContext(HomeContext);
    
    const [initialOrbit, setInitialOrbit] = React.useState<IOrbit>({
        excentricity: 0.02279,
        majorSemiAxis: 7018,
    });
    const [finalOrbit, setFinalOrbit] = React.useState<IOrbit>({
        excentricity: 0,
        majorSemiAxis: 22378,
    });
  
    
    const startSimulation = () => {
        const manouverConfig: IManouverConfig = {
            initialOrbit,
            finalOrbit,
            firstBiEllipseApogge: 0
        };

        homeContext.setOpenLoadingDialog(true);
        ManouverService.hohmann().create(manouverConfig)
            .then((response) => {
                homeContext.setSimulationResult(response.data);
                homeContext.setIsManouver(true);
                homeContext.setPageLocation(PageLocation.SIMULATION_RESULT);
            })
            .catch((error) => {
                homeContext.showError(error, 'Não foi possível realizar simulação');
            })
            .finally(() => {  homeContext.setOpenLoadingDialog(false); });
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
                direction='column'
                justifyContent='center'
                alignItems='center'
                spacing={5}
                style={{ minHeight: '100vh' }}>

                <PageHeader />

                <Grid item xs={6} style={{ width: '50%' }}>	
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={3}>

                        <Orbit 
                            orbit={initialOrbit}
                            setOrbit={setInitialOrbit} 
                            label={'Orbita Inicial'} />
                
                        <Orbit 
                            orbit={finalOrbit}
                            setOrbit={setFinalOrbit} 
                            label={'Orbita Final'} />

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