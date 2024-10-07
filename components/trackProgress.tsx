import React from "react";

import { Box } from "@mui/material";

interface TrackProgressProps {
  left: number;
  right: number;
  value: number;
  onChange: (e: any) => void;
}

const TrackProgress: React.FC<TrackProgressProps> = ({ left, right, value, onChange }) => {
  return (
    <Box sx={{
      display: 'flex'
    }}>
      <input
        type="range"
        min={left}
        max={right}
        value={value}
        onChange={onChange}
      />
      <Box sx={{
        minWidth: 70,
        textAlign: 'right',
      }}>{value} / {right}</Box>
    </Box>
  );
};

export default TrackProgress;