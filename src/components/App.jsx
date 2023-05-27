import { Route, Routes } from 'react-router';
import Layout from './Layout/Layout';
import { Home } from 'pages/Home';
import Register from 'pages/Register';
import { RestrictedRoute } from './RestrictedRoute';
import { Login } from 'pages/Login';
import ContactsBook from 'pages/ContactsBook';
import { PrivateRoute } from './PrivateRoute';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsBook />} />
          }
        />
      </Route>
    </Routes>
  );
};
