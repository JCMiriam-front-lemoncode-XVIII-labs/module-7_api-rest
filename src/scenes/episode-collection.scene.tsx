import * as React from 'react';
import { AppLayout } from '#layouts';
import { EpisodeCollectionContainer } from '#pods/episode-collection/episode-collection.container';

export const EpisodeCollectionScene = () => (
  <AppLayout>
    <EpisodeCollectionContainer />
  </AppLayout>
);
