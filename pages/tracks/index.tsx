import { useRouter } from "next/router";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { UnknownAction } from "redux";

import TrackList from "@/components/trackList";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import MainLayout from "@/layouts/mainLayout";
import { fetchTracks, searchTracks } from "@/store/actions-creators/track";
import { Box, Button, Card, Grid2, TextField } from "@mui/material";

const Index = () => {
  const [query, setQuery] = useState('');
  const router = useRouter();
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const { tracks, error } = useTypedSelector(state => state.track);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTracks() as unknown as UnknownAction);
  }, []);

  const handleSearch = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    setQuery(value);

    if (timer) {
      clearTimeout(timer);
    }

    setTimer(
      setTimeout(() => {
        dispatch(searchTracks(value) as unknown as UnknownAction);
      }, 300)
    );

  };

  if (error) {
    return (
      <MainLayout title="Список треков">
        {error}
      </MainLayout>
    );
  }

  return (
    <MainLayout title="Список треков - Музыкальная платформа">
      <Grid2 container justifyContent={'center'}>
        <Card sx={{ width: 900, p: 2 }}>
          <Box >
            <Grid2 container justifyContent={'space-between'}>
              <h1>Список треков</h1>
              <Button onClick={() => router.push('/tracks/create')}>Загрузить</Button>
            </Grid2>
          </Box>
          <TextField
            type="search"
            label="Найти"
            fullWidth
            value={query}
            onChange={handleSearch}
          />
          <TrackList tracks={tracks} />
        </Card>
      </Grid2>
    </MainLayout>
  );
};

export default Index;
