import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  characterCollection: string;
  editCharacter: string;
  locationCollection: string;
  episodeCollection: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  characterCollection: '/characters',
  editCharacter: '/characters/:id',
  locationCollection: '/locations',
  episodeCollection: '/episodes',
};

type NavigationFunction = (id: string) => string;

interface LinkRoutes extends Omit<SwitchRoutes, 'editCharacter'> {
  editCharacter: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  editCharacter: (id) => generatePath(switchRoutes.editCharacter, { id }),
};
