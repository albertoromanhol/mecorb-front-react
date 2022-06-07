import React from 'react';
import { Button, Dialog, Grid, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Data } from 'plotly.js';
import Plot from 'react-plotly.js';

import { IOrbit } from '../../../Models/Orbit';
import { themeConfiguration } from '../../../themeConfiguration';
import useWindowDimensions from '../../../shared/operators';

interface IManouverPreviewProps {
  initialOrbit: IOrbit;
  finalOrbit: IOrbit;
}

export function ManouverPreview({
    initialOrbit,
    finalOrbit,
}: IManouverPreviewProps) {
    const { height, width } = useWindowDimensions();

    const [plotOrbitsData, setPlotOrbitsData] = React.useState<IPlotOrbit[]>([]);

    const [showModal, setShowModal] = React.useState<boolean>(false);

    const [zAspectRatio, setZAspectRatio] = React.useState<number>(1);

    React.useEffect(() => {
        if (showModal) {
            plotOrbits();
            calculateZAspectRatio();
        }
    }, [initialOrbit, finalOrbit, showModal]);

    const earthRadius = 6_378;
  interface IPlotOrbit {
    name: string;
    mode: string;
    fill?: string;
    type?: string;
    line?: {
      width: number;
    };
    e?: number;
    a?: number;
    rp?: number;
    ra?: number;
    h?: number;
    x?: number[];
    y?: number[];
    z?: number[];
  }

  const plotOrbits = () => {
      const mu = 398_600;

      const orbit1: IPlotOrbit = {
          name: 'Orbita inicial',
          mode: 'lines',
          type: 'scatter3d',
          line: {
              width: 8,
          },
      };
      orbit1.x = [];
      orbit1.y = [];
      orbit1.z = [];
      (orbit1.e = initialOrbit.excentricity ?? 0),
      (orbit1.a = initialOrbit.majorSemiAxis ?? 0),
      (orbit1.rp = orbit1.a * (1 - orbit1.e));
      orbit1.ra = 2 * orbit1.a - orbit1.rp;
      orbit1.h = Math.sqrt(orbit1.rp * mu * (1 + orbit1.e));

      const orbit2: IPlotOrbit = {
          name: 'Orbita final',
          mode: 'lines',
          type: 'scatter3d',
          line: {
              width: 8,
          },
      };
      orbit2.x = [];
      orbit2.y = [];
      orbit2.z = [];
      (orbit2.e = finalOrbit.excentricity ?? 0),
      (orbit2.a = finalOrbit.majorSemiAxis ?? 0),
      (orbit2.rp = orbit2.a * (1 - orbit2.e));
      orbit2.ra = 2 * orbit2.a - orbit2.rp;
      orbit2.h = Math.sqrt(orbit2.rp * mu * (1 + orbit2.e));

      const earth: IPlotOrbit = {
          name: 'Terra',
          mode: 'lines',
          fill: 'toself',
          type: 'scatter3d',
      };
      earth.x = [];
      earth.y = [];
      earth.z = [];

      for (let f = 0; f < 2 * Math.PI * 3; f++) {
          const realF = f / 3;

          for (let v = 0; v <= Math.PI * 60; v++) {
              const realV = v / 60;

              const xEarth = earthRadius * Math.sin(realF) * Math.sin(realV);
              const yEarth = earthRadius * Math.cos(realF) * Math.sin(realV);
              const zEarth = earthRadius * Math.cos(realV);

              earth.x.push(xEarth);
              earth.y.push(yEarth);
              earth.z.push(zEarth);
          }
      }

      for (let f = 0; f < 2 * Math.PI * 3; f++) {
          const realF = f / 3;

          for (let v = 0; v <= Math.PI * 60; v++) {
              const realV = v / 60;

              const zEarth = earthRadius * Math.sin(realF) * Math.sin(realV);
              const xEarth = earthRadius * Math.cos(realF) * Math.sin(realV);
              const yEarth = earthRadius * Math.cos(realV);

              earth.x.push(xEarth);
              earth.y.push(yEarth);
              earth.z.push(zEarth);
          }
      }

      for (let f = 0; f < 2 * Math.PI * 3; f++) {
          const realF = f / 3;

          for (let v = 0; v <= Math.PI * 60; v++) {
              const realV = v / 60;

              const yEarth = earthRadius * Math.sin(realF) * Math.sin(realV);
              const zEarth = earthRadius * Math.cos(realF) * Math.sin(realV);
              const xEarth = earthRadius * Math.cos(realV);

              earth.x.push(xEarth);
              earth.y.push(yEarth);
              earth.z.push(zEarth);
          }
      }

      for (let f = 0; f <= 2 * Math.PI * 1000; f++) {
          const realF = f / 1000;

          const rOrbit1 =
        Math.pow(orbit1.h, 2) / (mu * (1 + orbit1.e * Math.cos(realF)));
          const xOrbit1 = rOrbit1 * Math.cos(realF);
          const yOrbit1 = rOrbit1 * Math.sin(realF);

          orbit1.x.push(xOrbit1);
          orbit1.y.push(yOrbit1);
          orbit1.z.push(0);

          const rOrbit2 =
        Math.pow(orbit2.h, 2) / (mu * (1 + orbit2.e * Math.cos(realF)));
          const xOrbit2 = rOrbit2 * Math.cos(realF);
          const yOrbit2 = rOrbit2 * Math.sin(realF);

          orbit2.x.push(xOrbit2);
          orbit2.y.push(yOrbit2);
          orbit2.z.push(0);
      }

      setPlotOrbitsData([earth, orbit1, orbit2]);
  };

  const calculateZAspectRatio = () => {
      if (
          initialOrbit &&
      initialOrbit.majorSemiAxis != undefined &&
      initialOrbit.excentricity != undefined &&
      finalOrbit &&
      finalOrbit.majorSemiAxis != undefined &&
      finalOrbit.excentricity != undefined
      ) {
          const perigeuOrbit1 =
        initialOrbit.majorSemiAxis * (1 - initialOrbit.excentricity);
          const apogeuOrbit1 = 2 * initialOrbit.majorSemiAxis - perigeuOrbit1;

          const perigeuOrbit2 =
        finalOrbit.majorSemiAxis * (1 - finalOrbit.excentricity);
          const apogeuOrbit2 = 2 * finalOrbit.majorSemiAxis - perigeuOrbit2;

          const maxApogeu = Math.max(
              Math.abs(apogeuOrbit1),
              Math.abs(apogeuOrbit2)
          );

          const zRatio = earthRadius / maxApogeu;

          setZAspectRatio(zRatio);
      }
  };

  return (
      <>
          <Grid item xs={12} style={{ width: '50%' }}>
              <Button
                  fullWidth
                  size="large"
                  variant="outlined"
                  color="primary"
                  onClick={() => setShowModal(true)}
                  style={{ height: '7vh' }}
              >
                  <code>EXIBIR ORBITAS</code>
              </Button>
          </Grid>

          <Dialog
              onClose={() => setShowModal(false)}
              maxWidth="lg"
              aria-labelledby="simple-dialog-title"
              PaperProps={{
                  style: { borderRadius: 16, padding: '12px', backgroundColor: '#Fff' },
              }}
              open={showModal}
          >
              <Grid
                  container
                  direction="row"
                  justifyContent="end"
                  alignItems="start"
                  spacing={1}
                  style={{ width: '100%' }}
              >
                  <Grid item xs={8}>
                      <Plot
                          data={plotOrbitsData as Data[]}
                          layout={{
                              title: 'Órbitas iniciais e finais',
                              autosize: false,
                              hovermode: 'closest',
                              width: 0.8 * width,
                              height: 0.8 * height,
                              dragmode: 'pan',
                              scene: {
                                  aspectmode: 'manual',
                                  aspectratio: {
                                      x: 1,
                                      y: 1,
                                      z: zAspectRatio,
                                  },
                                  camera: {
                                      center: {
                                          x: 0,
                                          y: 0,
                                          z: -0.2,
                                      },
                                      eye: {
                                          x: 0.8,
                                          y: 0.8,
                                          z: 0.5,
                                      },
                                  },
                                  xaxis: {
                                      title: 'X [km]',
                                  },
                                  yaxis: {
                                      title: 'Y [km]',
                                  },
                                  zaxis: {
                                      nticks: 1,
                                      title: 'Z [km]',
                                  },
                              },
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
                  <Grid
                      item
                      xs={2}
                      style={{
                          textAlign: 'end',
                          marginLeft: themeConfiguration.spacing(1),
                      }}
                  >
                      <IconButton
                          color="primary"
                          style={{ borderRadius: '16px' }}
                          onClick={() => setShowModal(false)}
                      >
                          <CloseIcon color="primary" />
                      </IconButton>
                  </Grid>
              </Grid>
          </Dialog>
      </>
  );
}
