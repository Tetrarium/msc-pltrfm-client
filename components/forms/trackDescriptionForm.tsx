import React from "react";

import { Grid2, TextField } from "@mui/material";

const TrackDescriptionForm = () => {
  return (
    <Grid2 container direction={"column"} gap={2}>
      <TextField
        label="Название трека"
      />
      <TextField
        label="Имя автора"
      />
      <TextField
        label="Текст песни"
        multiline
        rows={3}
      />
    </Grid2>
  );
};

export default TrackDescriptionForm;