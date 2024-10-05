import React from "react";

import { Card, Container, Grid2, Step, StepLabel, Stepper } from "@mui/material";

interface StepWrapperProps {
  activeStep: number;
}

const steps = ['Информация о треке', 'Загрузите обложку', 'Загрузите трек'];

const StepWrapper: React.FC<StepWrapperProps & React.PropsWithChildren> = ({ activeStep, children }) => {
  return (
    <Container>
      <Stepper activeStep={activeStep}>
        {steps.map(step => (
          <Step
            key={step}
          >
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid2 container justifyContent={'center'} mt={3} height={270}>
        <Card sx={{ width: 680, p: 1 }}>
          {children}
        </Card>
      </Grid2>
    </Container>
  );
};

export default StepWrapper;