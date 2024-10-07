import React from "react";

import { Pause, PlayArrow, VolumeUp } from "@mui/icons-material";
import { Box, Grid2, IconButton } from "@mui/material";

import s from "./styles/Player.module.sass";
import TrackProgress from "./trackProgress";

const Player = () => {
  const active = false;
  return (
    <Box component={'div'} className={s.player}>
      <IconButton>
        {active
          ? <Pause />
          : <PlayArrow />
        }
      </IconButton>
      <Grid2
        container
        direction={"column"}
        sx={{
          width: 200,
          mx: 2
        }}
      >
        <Box component={'div'}>name</Box>
        <Box
          component={'div'}
          sx={{
            fontSize: 12,
            color: 'gray'
          }}
        >artist</Box>
      </Grid2>
      <TrackProgress left={0} right={100} onChange={(e) => { }} />
      <VolumeUp sx={{ ml: 'auto' }} />
      <TrackProgress left={0} right={100} onChange={(e) => { }} />
    </Box>
  );
};

export default Player;