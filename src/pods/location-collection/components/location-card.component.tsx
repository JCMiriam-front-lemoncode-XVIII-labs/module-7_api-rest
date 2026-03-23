import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { LocationEntityVm } from '../location-collection.vm';
import * as classes from './location-card.styles';

interface Props {
  location: LocationEntityVm;
}

export const LocationCard: React.FunctionComponent<Props> = ({ location }) => {
  return (
    <Card>
        <CardContent>
            <Typography variant="h6">{location.name}</Typography>
            <Typography variant="body2" >Type: {location.type}</Typography>
            <Typography variant="body2">Dimension: {location.dimension}</Typography>
            <Typography variant="body2">Residents: {location.residentCount}</Typography>
        </CardContent>
    </Card>
  );
};