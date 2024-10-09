import Head from "next/head";
import React from "react";

import Navbar from "@/components/navbar";
import Player from "@/components/player";
import { Box, Container } from "@mui/material";

interface MainLayoutProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const MainLayout: React.FC<MainLayoutProps & React.PropsWithChildren> = ({
  children,
  title,
  description,
  keywords
}) => {
  return (
    <>
      <Head>
        <title>{title || 'Музыкальная площадка'}</title>
        <meta name="description" content={`Музыкальная платформа. Здесь каждый может оставить свой трек и стать знаменитым. ${description || ''}`} />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content={keywords || "Музыка, треки, артисты"} />
        <meta name="viewport" content="width=device-width?, initial-scale=1" />
      </Head>

      <Box sx={{ mb: 10 }}>
        <Navbar />
        <Container sx={{
          mt: 11
        }}>
          {children}
        </Container>
        <Player />
      </Box>
    </>
  );
};

export default MainLayout;
