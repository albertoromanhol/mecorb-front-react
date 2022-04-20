import React from 'react';

import {
    Grid,
    Checkbox,
    TextField,
    Chip,
} from '@mui/material';
import { Autocomplete } from '@mui/lab';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { IPlanet } from '../../../Models/Planet';

interface ISelectPlanetsProps {
    planets: IPlanet[];
    planetsSelected: IPlanet[];
    setPlanetsSelected: (planets: IPlanet[]) => void;
}

export function SelectPlanets({ planets, planetsSelected, setPlanetsSelected }: ISelectPlanetsProps) {
    const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
    const checkedIcon = <CheckBoxIcon fontSize="small" />;

    React.useEffect(() => {
        if (planets.length > 0) {
            setSunSelected();
        }
    }, [planets]);

    const setSunSelected = () => {
        const listPlanetsSelected = [...planetsSelected];
        
        if (listPlanetsSelected.findIndex((p) => p.name === 'Sun') === -1) {
            const sun = planets.find((p) => p.name === 'Sun');
    
            if (sun) listPlanetsSelected.push(sun);
        
            setPlanetsSelected(listPlanetsSelected);
        }
    };

    return (
        <Grid item xs={12} style={{ width: '100%' }}>
            <Autocomplete
                multiple
                fullWidth
                disableCloseOnSelect
                options={planets}
                value={planetsSelected}
                onChange={(_, newValue) => {
                    const sun = planets.find((p) => p.name === 'Sun');

                    const sunList = sun ? [sun] : [];

                    setPlanetsSelected([
                        ...sunList,
                        ...newValue.filter((p) => p.name !== 'Sun'),
                    ]);
                }}
                getOptionLabel={(option) => option.namePTBR}
                renderOption={(props, option, { selected }) => (
                    <li {...props}>
                        <Checkbox
                            icon={icon}
                            checkedIcon={checkedIcon}
                            style={{ marginRight: 8 }}
                            checked={selected}
                            disabled={option.name === 'Sun'}
                        />
                        {option.namePTBR}
                    </li>
                )}
                renderTags={(tagValue, getTagProps) =>
                    tagValue.map((option, index) => (
                        <Chip
                            {...getTagProps({ index })}
                            key={`${option.name}-${index}`}
                            label={option.namePTBR}
                            disabled={option.name === 'Sun'}
                        />
                    ))
                }
                noOptionsText="Nenhum corpo celeste encontrado!"
                renderInput={(params) => <TextField {...params} label="Corpos Celestes" />}
            />
        </Grid>
    );
}
