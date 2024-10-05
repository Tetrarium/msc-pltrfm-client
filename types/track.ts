export interface IComment {
  _id: string;
  username: string;
  text: string;
  trackId: string;
}

export interface ITrack {
  _id: string;
  name: string;
  artist: string;
  text: string;
  listens: number;
  pictire: string;
  audio: string;
  comments: IComment[];
}