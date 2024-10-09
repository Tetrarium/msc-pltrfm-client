import axios from "axios";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";

import { CONSTS } from "@/consts";
import { useInput } from "@/hooks/useInput";
import MainLayout from "@/layouts/mainLayout";
import { ITrack } from "@/types/track";
import { Box, Button, Card, Divider, Grid2, TextField, Typography } from "@mui/material";

interface TrackProps {
  serverTrack: ITrack;
}

const Index = ({ serverTrack }: TrackProps) => {
  const [track, setTrack] = useState<ITrack>(serverTrack);
  const router = useRouter();
  const username = useInput('');
  const comment = useInput('');

  const addComment = async () => {
    try {
      const response = await axios.post(CONSTS.URL_TRACKS + 'tracks/comment', {
        username: username.value,
        text: comment.value,
        trackId: track._id,
      });
      setTrack({ ...track, comments: [...track.comments, response.data] });
      // username.clear();
      comment.clear();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <MainLayout
      title={"Музыкальная платформа - " + track.name + " - " + track.artist}
      description={track.name + ' - ' + track.artist}
      keywords={"Музыка, Треки, Исполнители, " + track.artist + ", " + track.name}
    >
      <Button
        variant="outlined"
        onClick={() => router.push('/tracks')}
        sx={{
          fontSize: 16
        }}
      >К списку треков</Button>
      <Card sx={{ my: 3, p: 2 }}>
        <Grid2 container>
          <img src={CONSTS.URL_TRACKS + track.picture} alt="" width={200} height={200} />
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
              {...username}
              fullWidth
            />
            <TextField
              label="Комментарий"
              {...comment}
              fullWidth
              multiline
              rows={4}
            />
            <Button variant="outlined" onClick={addComment}>Отправить</Button>
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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const response = await axios.get(CONSTS.URL_TRACKS + 'tracks/' + params?.id);

  return {
    props: {
      serverTrack: response.data,
    }
  };
};