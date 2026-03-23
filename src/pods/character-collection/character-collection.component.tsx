import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';

interface Props {
  characterCollection: CharacterEntityVm[];
  currentPage: number;
  totalPages: number;
  search: string;
  onSearch: (value: string) => void;
  onPreviousPage: () => void;
  onNextPage: () => void;
  onEdit: (id: string) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const {
    characterCollection,
    currentPage,
    totalPages,
    search,
    onSearch,
    onPreviousPage,
    onNextPage,
    onEdit,
  } = props;

  return (
    <div className={classes.root}>
      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} onEdit={onEdit} />
          </li>
        ))}
      </ul>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem',
          marginTop: '1.5rem',
        }}
      >
        <Button onClick={onPreviousPage} disabled={currentPage <= 1}>prev</Button>
        <Typography variant="body1">Page {currentPage} of {totalPages}</Typography>
        <Button onClick={onNextPage} disabled={currentPage >= totalPages}>Next</Button>
      </div>
    </div>
  );
};