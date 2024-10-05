import { useRouter } from "next/router";
import React from "react";

import { ITrack } from "@/types/track";
import { Delete, Pause, PlayArrow } from "@mui/icons-material";
import { Box, Card, Grid2, IconButton } from "@mui/material";

interface TrackItemProps {
  track: ITrack;
  active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({ track, active = false }) => {
  const router = useRouter();

  return (
    <Card
      sx={{
        my: 1,
        px: 3,
        py: 1,
        display: "flex",
        alignItems: "center"
      }}
      onClick={() => router.push('/tracks/' + track._id)}
    >
      <IconButton
        onClick={(e) => e.stopPropagation()}
        sx={{ mr: 2 }}
      >
        {active
          ? <Pause />
          : <PlayArrow />
        }
      </IconButton>
      <img width={70} height={70} src={track.pictire} />
      <Grid2
        container
        direction={"column"}
        sx={{
          width: 200,
          mx: 2
        }}
      >
        <Box component={'div'}>{track.name}</Box>
        <Box
          component={'div'}
          sx={{
            fontSize: 12,
            color: 'gray'
          }}
        >{track.artist}</Box>
      </Grid2>
      {active && <div>02:42 / 03:22</div>}
      <IconButton
        onClick={(e) => e.stopPropagation()}
        sx={{
          ml: 'auto'
        }}
      >
        <Delete />
      </IconButton>
    </Card>
  );
};

export default TrackItem;