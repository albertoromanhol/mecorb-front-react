import React from 'react';

import {
    Grid,
    Checkbox,
    TextField,
    Button,
} from '@mui/material';
import { Autocomplete } from '@mui/lab';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { IPlanetProps } from '../Const/PlanetList';

export function ShowPlanets({ planets }: { planets: IPlanetProps[] }) {
    const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
    const checkedIcon = <CheckBoxIcon fontSize="small" />;

    const [planetsSelected, setPlanetsSelected] = React.useState<IPlanetProps[]>([]);


    // const pushEarthToPlanets = () => {
    //     const planetsSelected = [...planets];
    //     const earth = PlanetList.find((p) => p.name === 'Earth');

    //     if (earth) planetsSelected.push(earth);

    //     setPlanets(planetsSelected);
    // };

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
        >
            {/* FAZER SEM PRECISAR PASSAR O WIDTH 500PX */}
            <Grid item xs={12} style={{ width: '100%' }}>
                <Autocomplete
                    multiple
                    fullWidth
                    id="checkboxes-tags-demo"
                    options={planets}
                    value={planetsSelected}
                    onChange={(_, newValue) => {
                        setPlanetsSelected(newValue);
                    }}
                    disableCloseOnSelect
                    getOptionLabel={(option) => option.namePTBR}
                    renderOption={(props, option, { selected }) => (
                        <li {...props}>
                            <Checkbox
                                icon={icon}
                                checkedIcon={checkedIcon}
                                style={{ marginRight: 8 }}
                                checked={selected}
                            />
                            {option.namePTBR}
                        </li>
                    )}
                    renderInput={(params) => <TextField {...params} label="Planetas" />}
                />
            </Grid>
            
            <Grid item xs={12}>
                <Button
                    variant="outlined"
                    size="large"
                    onClick={() => {
                        console.log(planets);
                    }}
                >
                    <code>start simulation</code>
                </Button>
            </Grid>
        </Grid>
    );
}
