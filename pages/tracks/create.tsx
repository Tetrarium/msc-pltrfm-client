import React, { useState } from "react";

import FileUpload from "@/components/forms/fileUpload";
import TrackDescriptionForm from "@/components/forms/trackDescriptionForm";
import StepWrapper from "@/components/stepWrapper";
import MainLayout from "@/layouts/mainLayout";
import { Button, Grid2, Typography } from "@mui/material";

const MIN_STEP = 0;
const MAX_STEP = 2;

const Create = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [picture, setPicture] = useState<File | null>(null);
  const [audio, setAudio] = useState<File | null>(null);

  const back = () => {
    if (activeStep > MIN_STEP) {
      setActiveStep(prev => prev - 1);
    }
  };

  const next = () => {
    if (activeStep <= MAX_STEP) {
      setActiveStep(prev => prev + 1);
    }
  };

  return (
    <MainLayout>
      <Typography variant="h3" mb={3}>Загрузка трека</Typography>
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 &&
          <TrackDescriptionForm />
        }
        {activeStep === 1 &&
          <FileUpload setFile={setPicture} accept="image/*">
            Загрузить изображение
          </FileUpload>
        }
        {activeStep === 2 &&
          <FileUpload setFile={setAudio} accept="audio/*">
            Загрузить аудио
          </FileUpload>
        }
      </StepWrapper>
      <Grid2 container justifyContent={'center'} mt={2} gap={2}>
        <Button disabled={activeStep === MIN_STEP} variant="outlined" onClick={back}>Назад</Button>
        <Button disabled={activeStep > MAX_STEP} variant="outlined" onClick={next}>Далее</Button>
      </Grid2>
    </MainLayout>
  );
};

export default Create;
