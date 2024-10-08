import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { UnknownAction } from "redux";

import TrackList from "@/components/trackList";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import MainLayout from "@/layouts/mainLayout";
import { NextThunkDispatch, wrapper } from "@/store";
import { fetchTracks } from "@/store/actions-creators/track";
import { ITrack } from "@/types/track";
import { Box, Button, Card, Grid2 } from "@mui/material";

console.log('top of track');

const Index = () => {
  const router = useRouter();

  const { tracks, error } = useTypedSelector(state => state.track);
  console.log('track');
  console.log(tracks);
  console.log(error);

  const dispatch = useDispatch();
  console.log(dispatch);

  useEffect(() => {
    dispatch(fetchTracks() as unknown as UnknownAction);
  }, []);

  // const tracks: ITrack[] = [
  //   {
  //     _id: '67014f59e3f0bcce57bfbaa5',
  //     name: 'Track 1',
  //     artist: 'Artist 1',
  //     audio: 'http://localhost:5000/audio/0df3504b-80f9-482b-949a-003b3eac69f3.mp3',
  //     pictire: 'http://localhost:5000/image/1d0c2097-c0a1-4cf7-b707-6d03dfff2562.png',
  //     listens: 0,
  //     comments: [],
  //     text: 'text1'
  //   },
  //   {
  //     _id: '2',
  //     name: 'Track 2',
  //     artist: 'Artist 2',
  //     audio: 'http://localhost:5000/audio/0df3504b-80f9-482b-949a-003b3eac69f3.mp3',
  //     pictire: 'http://localhost:5000/image/1d0c2097-c0a1-4cf7-b707-6d03dfff2562.png',
  //     listens: 0,
  //     comments: [],
  //     text: 'text2'
  //   },
  //   {
  //     _id: '3',
  //     name: 'Track 3',
  //     artist: 'Artist 3',
  //     audio: 'http://localhost:5000/audio/0df3504b-80f9-482b-949a-003b3eac69f3.mp3',
  //     pictire: 'http://localhost:5000/image/1d0c2097-c0a1-4cf7-b707-6d03dfff2562.png',
  //     listens: 0,
  //     comments: [],
  //     text: 'text1'
  //   }
  // ];


  if (error) {
    return (
      <MainLayout>
        {error}
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <Grid2 container justifyContent={'center'}>
        <Card sx={{ width: 900 }}>
          <Box p={2}>
            <Grid2 container justifyContent={'space-between'}>
              <h1>Список треков</h1>
              <Button onClick={() => router.push('/tracks/create')}>Загрузить</Button>
            </Grid2>
          </Box>
          <TrackList tracks={tracks} />
        </Card>
      </Grid2>
    </MainLayout>
  );
};

export default Index;
