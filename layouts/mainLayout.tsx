import React from "react";

import Navbar from "@/components/navbar";
import { Container } from "@mui/material";

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container sx={{
        mt: 11
      }}>
        {children}
      </Container>
    </>
  );
};

export default MainLayout;
