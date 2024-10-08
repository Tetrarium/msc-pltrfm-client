import React from "react";

import { UseInputType } from "@/hooks/useInput";
import { Grid2, TextField } from "@mui/material";

interface TrackDescriptionFormProps {
  name: UseInputType;
  artist: UseInputType;
  text: UseInputType;
}

const TrackDescriptionForm = ({ name, artist, text }: TrackDescriptionFormProps) => {

  return (
    <Grid2 container direction={"column"} gap={2}>
      <TextField
        label="Название трека"
        {...name}
      />
      <TextField
        label="Имя автора"
        {...artist}
      />
      <TextField
        label="Текст песни"
        {...text}
        multiline
        rows={3}
      />
    </Grid2>
  );
};

export default TrackDescriptionForm;