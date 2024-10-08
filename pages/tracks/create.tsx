import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";

import FileUpload from "@/components/forms/fileUpload";
import TrackDescriptionForm from "@/components/forms/trackDescriptionForm";
import StepWrapper from "@/components/stepWrapper";
import { CONSTS } from "@/consts";
import { useInput } from "@/hooks/useInput";
import MainLayout from "@/layouts/mainLayout";
import { Button, Grid2, Typography } from "@mui/material";

const MIN_STEP = 0;
const MAX_STEP = 2;

const Create = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [picture, setPicture] = useState<File>(null as unknown as File);
  const [audio, setAudio] = useState<File>(null as unknown as File);
  const router = useRouter();

  const name = useInput('');
  const artist = useInput('');
  const text = useInput('');

  const back = () => {
    if (activeStep > MIN_STEP) {
      setActiveStep(prev => prev - 1);
    }
  };

  const next = () => {
    if (activeStep < MAX_STEP) {
      console.log('set active step');
      setActiveStep(prev => prev + 1);
    } else {
      const formData = new FormData();
      formData.append('name', name.value);
      formData.append('artist', artist.value);
      formData.append('text', text.value);
      formData.append('picture', picture);
      formData.append('audio', audio);

      axios.post(CONSTS.URL_TRACKS + 'tracks', formData)
        .then(() => router.push('/tracks'))
        .catch(e => console.log(e));
      console.log('post track');
    }
  };

  return (
    <MainLayout>
      <Typography variant="h3" mb={3}>Загрузка трека</Typography>
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 &&
          <TrackDescriptionForm {...{ name, artist, text }} />
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
