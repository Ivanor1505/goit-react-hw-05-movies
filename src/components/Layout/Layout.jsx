import { Outlet } from 'react-router-dom';
import {
  Header,
  LayoutContainer,
  Navigation,
  NavigationLink,
} from './Layout.styled';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <LayoutContainer>
      <Header>
        <Navigation>
          <NavigationLink to="/">Home</NavigationLink>
          <NavigationLink to="/movies">Movies</NavigationLink>
        </Navigation>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </LayoutContainer>
  );
};
