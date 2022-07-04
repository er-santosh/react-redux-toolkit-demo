import { useDispatch, useSelector } from "react-redux";
import classes from "./Header.module.css";
import { authActions } from "../../store/AuthReducer";
import { NavLink } from "react-router-dom";

const Header = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(authActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : undefined)}
              to="/counter"
            >
              My Counter
            </NavLink>
          </li>
          {isAuthenticated ? (
            <li>
              <button type="button" onClick={logout}>
                Logout
              </button>
            </li>
          ) : (
            <NavLink
              className={({ isActive }) => (isActive ? "active" : undefined)}
              to="/login"
            >
              Login
            </NavLink>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
