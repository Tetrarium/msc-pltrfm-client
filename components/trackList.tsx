import React from "react";

import { ITrack } from "@/types/track";
import { Box, Grid2 } from "@mui/material";

import TrackItem from "./trackItem";

interface TrackListProps {
  tracks: ITrack[];
}

const TrackList: React.FC<TrackListProps> = ({ tracks }) => {
  return (
    <Grid2 container direction={'column'}>
      <Box>
        {tracks.map(track => (
          <TrackItem
            key={track._id}
            track={track}
          />
        ))}
      </Box>
    </Grid2>
  );
};

export default TrackList;