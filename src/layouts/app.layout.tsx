import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link, useLocation } from 'react-router-dom';
import { linkRoutes } from '#core/router';
import * as classes from './app.layout.styles';

interface Props {
  children: React.ReactNode;
}

interface NavItem {
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { label: 'Characters', path: linkRoutes.characterCollection },
  { label: 'Locations', path: linkRoutes.locationCollection },
  { label: 'Episodes', path: linkRoutes.episodeCollection },
];

export const AppLayout: React.FC<Props> = (props) => {
  const { children } = props;
  const location = useLocation();

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <nav className={classes.navContainer}>
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`${classes.navLink} ${isActive ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>{children}</main>
    </>
  );
};
