import React, { ChangeEvent, useEffect } from "react";

import { CONSTS } from "@/consts";
import { useActions } from "@/hooks/useActions";
import { useTypedSelector } from "@/hooks/useTypedSelector";
// import { ITrack } from "@/types/track";
import { Pause, PlayArrow, VolumeUp } from "@mui/icons-material";
import { Box, Grid2, IconButton } from "@mui/material";

import s from "./styles/Player.module.sass";
import TrackProgress from "./trackProgress";

let audio: HTMLAudioElement;

const Player = () => {
  const { active, pause, volume, duration, currentTime } = useTypedSelector(state => state.player);
  const { pauseTrack, playTrack, setDuration, setVolume, setCurrentTime } = useActions();

  useEffect(() => {
    if (!audio) {
      audio = new Audio();
    } else {
      setAudio();
      audio.play();
    }

  }, [active]);

  useEffect(() => {
    if (pause) {
      audio.pause();
    } else {
      audio.play();
    }
  }, [pause]);

  const setAudio = () => {
    if (active) {
      audio.src = CONSTS.URL_TRACKS + active.audio;
      audio.volume = volume / 100;
      audio.onloadeddata = () => {
        setDuration(Math.ceil(audio.duration));
      };

      audio.ontimeupdate = () => {
        setCurrentTime(Math.ceil(audio.currentTime));
      };

    }
  };

  const handlePlay = () => {
    console.log(pause);
    if (pause) {
      playTrack();
    } else {
      pauseTrack();
    }
  };

  const handleChangeVolume = (event: ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(event.target.value));
    audio.volume = volume / 100;
  };

  const handleChangeCurrentTime = (event: ChangeEvent<HTMLInputElement>) => {
    audio.currentTime = Number(event.target.value);
    setCurrentTime(Number(event.target.value));
  };

  if (!active) {
    return null;
  }

  return (
    <Box component={'div'} className={s.player}>
      <IconButton onClick={handlePlay}>
        {pause
          ? <PlayArrow />
          : <Pause />
        }
      </IconButton>
      <Grid2
        container
        direction={"column"}
        sx={{
          width: 200,
          mx: 2
        }}
      >
        <Box component={'div'}>{active?.name}</Box>
        <Box
          component={'div'}
          sx={{
            fontSize: 12,
            color: 'gray'
          }}
        >{active?.artist}</Box>
      </Grid2>
      <TrackProgress left={0} right={duration} value={currentTime} onChange={handleChangeCurrentTime} />
      <VolumeUp sx={{ ml: 'auto' }} />
      <TrackProgress left={0} right={100} value={volume} onChange={handleChangeVolume} />
    </Box>
  );
};

export default Player;