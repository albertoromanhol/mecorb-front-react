import React from 'react';

import { Grid, Checkbox, TextField, Button, LinearProgress } from '@mui/material';
import { Autocomplete } from '@mui/lab';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { IPlanetProps, PlanetList } from '../Const/PlanetList';

export function ShowPlanets() {
    const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
    const checkedIcon = <CheckBoxIcon fontSize="small" />;

    const [planets, setPlanets] = React.useState<IPlanetProps[]>([]);
    const [loading, setLoading] = React.useState<boolean>(false);

    React.useEffect(() => {
        pushEarthToPlanets();
    }, []);

    const pushEarthToPlanets = () => {
        const planetsSelected = [...planets];
        const earth = PlanetList.find(p => p.name === 'Earth');

        if (earth)
            planetsSelected.push(earth);

        setPlanets(planetsSelected);
    };
    
    return (
        <Grid
            container
            direction='column'
            justifyContent='center'
            alignItems='center'
            spacing={2}> 
            {/* FAZER SEM PRECISAR PASSAR O WIDTH 500PX */}
            <Grid item xs={12} style={{ width: '100%'}}>
                <Autocomplete
                    multiple
                    fullWidth
                    id="checkboxes-tags-demo"
                    options={PlanetList}
                    value={planets}
                    onChange={(_, newValue) => {
                        setPlanets(newValue);
                    }}
                    disableCloseOnSelect
                    getOptionLabel={(option) => option.name}
                    renderOption={(props, option, { selected }) => (
                        <li {...props}>
                            <Checkbox
                                icon={icon}
                                checkedIcon={checkedIcon}
                                style={{ marginRight: 8 }}
                                checked={selected}
                            />
                            {option.name}
                        </li>
                    )}
                    renderInput={(params) => (
                        <TextField {...params} label="Planetas" />
                    )}
                />
            </Grid>
            {loading && <Grid item xs={12} style={{ width: '100%' }}>
                <LinearProgress color='primary' />
            </Grid>}
            <Grid item xs={12}>
                <Button
                    variant='outlined'
                    size='large'
                    onClick={() => { console.log(planets); setLoading(!loading); }}>
                    <code>start simulation</code>
                </Button>
            </Grid>
        </Grid>
    );
}