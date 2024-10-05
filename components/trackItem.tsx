import React from "react";

import { ITrack } from "@/types/track";
import { Delete, Pause, PlayArrow } from "@mui/icons-material";
import { Card, Grid2, IconButton } from "@mui/material";

import s from "./styles/trackItem.module.sass";

interface TrackItemProps {
  track: ITrack;
  active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({ track, active = false }) => {
  return (
    <Card sx={{
      my: 1,
      px: 3,
      py: 1,
      display: "flex",
      alignItems: "center"
    }}>
      <IconButton sx={{ mr: 2 }}>
        {active
          ? <Pause />
          : <PlayArrow />
        }
      </IconButton>
      <img width={70} height={70} src={track.pictire} />
      <Grid2 container direction={"column"} className={s.track__description}>
        <div>{track.name}</div>
        <div className={s.track__artist}>{track.artist}</div>
      </Grid2>
      {active && <div>02:42 / 03:22</div>}
      <IconButton sx={{
        ml: 'auto'
      }}>
        <Delete />
      </IconButton>
    </Card>
  );
};

export default TrackItem;