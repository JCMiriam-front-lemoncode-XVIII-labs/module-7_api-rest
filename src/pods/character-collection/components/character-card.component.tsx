import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { CharacterEntityVm } from '../character-collection.vm';
import * as classes from './character-card.styles';

interface Props {
  character: CharacterEntityVm;
  onEdit: (id: string) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onEdit } = props;

  return (
    <Card>
      <CardHeader
        avatar={<Avatar aria-label="Character">{character.name.charAt(0)}</Avatar>}
        title={character.name}
        subheader={`${character.status} - ${character.species}`}
      />
      <CardContent>
        <div className={classes.content}>
          <CardMedia
            className={classes.image}
            image={character.image}
            title={character.name}
            style={{ height: 0, paddingTop: '56.25%' }}
          />
          
          <div className={classes.pillsContainer}>
            <Typography className={classes.typography} variant="body2" >
              {character.gender}
            </Typography>
            <Typography className={classes.typography} variant="body2">
              {character.origin}
            </Typography>
          </div>
        </div>

        <Typography variant="body2" >{character.bestSentence}</Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => onEdit(character.id)}>
          <EditIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};