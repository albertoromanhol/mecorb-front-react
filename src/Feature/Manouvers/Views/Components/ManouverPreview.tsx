import { Grid } from '@mui/material';
import { Data } from 'plotly.js';
import React from 'react';
import Plot from 'react-plotly.js';
import { IOrbit } from '../../../../Models/Orbit';

interface IManouverPreviewProps {
  initialOrbit: IOrbit;
  finalOrbit: IOrbit;
}

export function ManouverPreview({ initialOrbit, finalOrbit }: IManouverPreviewProps) {
    const [plotOrbitsData, setPlotOrbitsData] = React.useState<IPlotOrbit[]>([]);

    React.useEffect(() => {
        plotOrbits();
    }, [initialOrbit, finalOrbit]);	

  interface IPlotOrbit {
      name: string;
      mode: string;
      fill?: string;
      e?: number,
      a?: number,
      rp?: number,
      ra?: number,
      h?: number,
      x?: number[],
      y?: number[]
  }

  
  const plotOrbits = () => {
      const mu = 398_600;
      const earthRadius = 6_378;

      const orbit1 : IPlotOrbit = {
          name: 'Orbita inicial',
          mode: 'lines',
      };
      orbit1.x = [];
      orbit1.y = [];
      orbit1.e = initialOrbit.excentricity,
      orbit1.a = initialOrbit.majorSemiAxis,
      orbit1.rp = orbit1.a * (1 - orbit1.e);
      orbit1.ra = 2 * orbit1.a - orbit1.rp;
      orbit1.h = Math.sqrt(orbit1.rp * mu * (1 + orbit1.e));
      

      const orbit2 : IPlotOrbit = {
          name: 'Orbita final',
          mode: 'lines',
      };
      orbit2.x = [];
      orbit2.y = [];
      orbit2.e = finalOrbit.excentricity,
      orbit2.a = finalOrbit.majorSemiAxis,
      orbit2.rp = orbit2.a * (1 - orbit2.e);
      orbit2.ra = 2 * orbit2.a - orbit2.rp;
      orbit2.h = Math.sqrt(orbit2.rp * mu * (1 + orbit2.e));

      const earth: IPlotOrbit = {
          name: 'Terra',
          mode: 'lines',
          fill: 'toself',
      };
      earth.x = [];
      earth.y = [];
      
      for (let f = 0; f <= 2*Math.PI*1000; f++) {
          const realF = f/1000;

          const xEarth = earthRadius*Math.sin(realF);
          const yEarth = earthRadius*Math.cos(realF);
          
          earth.x.push(xEarth);
          earth.y.push(yEarth);

          const rOrbit1 = Math.pow(orbit1.h, 2) / (mu * (1 + orbit1.e * Math.cos(realF)));
          const xOrbit1 = rOrbit1*Math.cos(realF);
          const yOrbit1 = rOrbit1*Math.sin(realF);
          
          orbit1.x.push(xOrbit1);
          orbit1.y.push(yOrbit1);

          
          const rOrbit2 = Math.pow(orbit2.h, 2) / (mu * (1 + orbit2.e * Math.cos(realF)));
          const xOrbit2 = rOrbit2*Math.cos(realF);
          const yOrbit2 = rOrbit2*Math.sin(realF);
          
          orbit2.x.push(xOrbit2);
          orbit2.y.push(yOrbit2);
      }

      setPlotOrbitsData([earth, orbit1, orbit2]);
  };

  
  return (
      <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          style={{ marginBottom: '4rem', width: '100%'}}>
          <Grid item xs={12}>
              <Plot
                  data={plotOrbitsData as Data[]}
                  layout={{ title: 'Órbitas iniciais e finais',
                      autosize: false,
                      hovermode: 'closest',
                      dragmode: 'pan',
                      xaxis: {
                          scaleratio: 1,
                          title: {
                              text: 'X [km]',
                          },
                      },
                      yaxis: {
                          scaleratio: 1,
                          scaleanchor: 'x',
                          title: {
                              text: 'Y [km]',
                          },
                      },
                  }}
                  style={{
                      margin: 'auto',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                  }}
                  config={{
                      displaylogo: false,
                  }}
              />
          </Grid>
      </Grid>
  );
}