import React from "react";

import Navbar from "@/components/navbar";
import Player from "@/components/player";
import { Box, Container } from "@mui/material";

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box sx={{ mb: 10 }}>
      <Navbar />
      <Container sx={{
        mt: 11
      }}>
        {children}
      </Container>
      <Player />
    </Box>
  );
};

export default MainLayout;
