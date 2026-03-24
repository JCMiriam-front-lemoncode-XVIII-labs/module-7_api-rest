import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { EpisodeEntityVm } from './episode-collection.vm';
import { EpisodeCard } from './components/episode-card.component';
import * as classes from './episode-collection.styles';

interface Props {
  episodeCollection: EpisodeEntityVm[];
  currentPage: number;
  totalPages: number;
  search: string;
  onSearch: (value: string) => void;
  onPreviousPage: () => void;
  onNextPage: () => void;
}

export const EpisodeCollectionComponent: React.FunctionComponent<Props> = ({
  episodeCollection,
  currentPage,
  totalPages,
  search,
  onSearch,
  onPreviousPage,
  onNextPage,
}) => {
  return (
    <div className={classes.root}>
      <TextField
        fullWidth
        label="Search episode"
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        sx={{ mb: 2 }}
      />

      <ul className={classes.list}>
        {episodeCollection.map((episode) => (
          <li key={episode.id}>
            <EpisodeCard episode={episode} />
          </li>
        ))}
      </ul>

      <div
        style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          marginTop: '1rem',
        }}
      >
        <Button onClick={onPreviousPage} disabled={currentPage <= 1}>
          Previous
        </Button>
        <Typography>
          Page {currentPage} of {totalPages}
        </Typography>
        <Button onClick={onNextPage} disabled={currentPage >= totalPages}>
          Next
        </Button>
      </div>
    </div>
  );
};
