import { Outlet } from 'react-router-dom';
import {
  Header,
  LayoutContainer,
  Navigation,
  NavigationLink,
} from './Layout.styled';

export const Layout = () => {
  return (
    <LayoutContainer>
      <Header>
        <Navigation>
          <NavigationLink to="/">Home</NavigationLink>
          <NavigationLink to="/movies">Movies</NavigationLink>
        </Navigation>
      </Header>
      <Outlet />
    </LayoutContainer>
  );
};
