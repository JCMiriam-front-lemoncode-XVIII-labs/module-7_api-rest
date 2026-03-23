import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { LocationEntityVm } from './location-collection.vm';
import { LocationCard } from './components/location-card.component';
import * as classes from './location-collection.styles';

interface Props {
  locationCollection: LocationEntityVm[];
  currentPage: number;
  totalPages: number;
  search: string;
  onSearch: (value: string) => void;
  onPreviousPage: () => void;
  onNextPage: () => void;
}

export const LocationCollectionComponent: React.FunctionComponent<Props> = ({
  locationCollection,
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
        label="Search location"
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        sx={{ mb: 2 }}
      />

      <ul className={classes.list}>
        {locationCollection.map((location) => (
          <li key={location.id}>
            <LocationCard location={location} />
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1rem' }}>
        <Button onClick={onPreviousPage} disabled={currentPage <= 1}>Prev</Button>
        <Typography>Page {currentPage} of {totalPages}</Typography>
        <Button onClick={onNextPage} disabled={currentPage >= totalPages}>Next</Button>
      </div>
    </div>
  );
};