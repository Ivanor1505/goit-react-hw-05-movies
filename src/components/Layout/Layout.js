import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <header>
        <ul>
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" end>
              Movies
            </NavLink>
          </li>
        </ul>
          </header>
                <Outlet />
    </div>
  );
};
