import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { LocationEntityVm } from '../location-collection.vm';

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