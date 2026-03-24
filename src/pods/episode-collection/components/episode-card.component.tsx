import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { EpisodeEntityVm } from '../episode-collection.vm';

interface Props {
  episode: EpisodeEntityVm;
}

export const EpisodeCard: React.FunctionComponent<Props> = ({ episode }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{episode.name}</Typography>
        <Typography variant="body2">{episode.episode}</Typography>
        <Typography variant="body2">{episode.airDate}</Typography>
      </CardContent>
    </Card>
  );
};