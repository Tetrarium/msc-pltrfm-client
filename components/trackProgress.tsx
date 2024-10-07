import React from "react";

import { Box } from "@mui/material";

interface TrackProgressProps {
  left: number;
  right: number;
  onChange: (e: any) => void;
}

const TrackProgress: React.FC<TrackProgressProps> = ({ left, right, onChange }) => {
  return (
    <Box sx={{
      display: 'flex'
    }}>
      <input
        type="range"
        min={0}
        max={right}
        value={left}
        onChange={onChange}
      />
      <Box>{left} / {right}</Box>
    </Box>
  );
};

export default TrackProgress;