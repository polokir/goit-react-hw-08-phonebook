import { selectIsLoggedIn } from 'redux/auth/selectors';
import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className="nav">
      <div className="nav_item">
        <NavLink className="logo" to="/">
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink className="logo" to="contacts">
            Contacts
          </NavLink>
        )}
      </div>
      {isLoggedIn ? (
        <div className="user_menu">
          <UserMenu className="user_list" />
        </div>
      ) : (
        <div className="nav_container">
          <NavLink className="btn" to="Register">
            Register
          </NavLink>
          <NavLink className="btn" to="Login">
            Log In
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Header;
