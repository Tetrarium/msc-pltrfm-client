import { useRouter } from "next/router";
import React from "react";

import MainLayout from "@/layouts/mainLayout";
import { ITrack } from "@/types/track";
import { Box, Button, Card, Divider, Grid2, TextField, Typography } from "@mui/material";

const Index = () => {
  const track: ITrack = {
    _id: '67014f59e3f0bcce57bfbaa5',
    name: 'Track 1',
    artist: 'Artist 1',
    audio: 'http://localhost:5000/audio/0df3504b-80f9-482b-949a-003b3eac69f3.mp3',
    pictire: 'http://localhost:5000/image/1d0c2097-c0a1-4cf7-b707-6d03dfff2562.png',
    listens: 0,
    comments: [
      { _id: '1', username: 'User1', text: 'comment1', trackId: '67014f59e3f0bcce57bfbaa5' },
      { _id: '2', username: 'User2', text: 'comment2', trackId: '67014f59e3f0bcce57bfbaa5' },
      { _id: '3', username: 'User3', text: 'comment3', trackId: '67014f59e3f0bcce57bfbaa5' },
    ],
    text: 'text1'
  };

  const router = useRouter();

  return (
    <MainLayout>
      <Button
        variant="outlined"
        onClick={() => router.push('/tracks')}
        sx={{
          fontSize: 16
        }}
      >К списку треков</Button>
      <Card sx={{ my: 3, p: 2 }}>
        <Grid2 container>
          <img src={track.pictire} alt="" width={200} height={200} />
          <Box sx={{ ml: 2 }}>
            <Typography variant="h3">Название трека - {track.name}</Typography>
            <Typography variant="h4">Исполнитель - {track.artist}</Typography>
            <Typography variant="h5">Прослушиваний - {track.listens}</Typography>
          </Box>
        </Grid2>
        <Box sx={{ my: 2 }}>
          <Typography variant="h4">Текст песни</Typography>
          <Typography variant="body1">{track.text}</Typography>
        </Box>
        <Box>
          <Typography variant="h4">Комментарии</Typography>
          <Grid2 container gap={2}>
            <TextField
              label="Ваше имя"
              fullWidth
            />
            <TextField
              label="Комментарий"
              fullWidth
              multiline
              rows={4}
            />
            <Button variant="outlined">Отправить</Button>
          </Grid2>
          <Box>
            {track.comments.map(comment => (
              <Card
                key={comment._id}
                sx={{
                  my: 2,
                  p: 1,
                }}
              >
                <Typography variant="h6">Автор - {comment.username}</Typography>
                <Divider />
                <Typography variant="body2" mt={1}>{comment.text}</Typography>
              </Card>
            ))}
          </Box>
        </Box>
      </Card>
    </MainLayout>
  );
};

export default Index;