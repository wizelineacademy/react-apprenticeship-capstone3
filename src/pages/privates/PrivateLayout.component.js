import React from 'react';
import { useLocation, Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import { logOut } from '../../providers/Login.api';
import { useNavigate } from 'react-router-dom';
import { Body, Menu, MenuOption, MainContainer } from './PagesStyledComponents';

const PrivateLayout = ({ children }) => {
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const DoLogOut = () => {
    logOut()
      .then((resp) => {
        navigate('/login');
      })
      .catch((error) => {});
  };

  return !isAuthenticated ? (
    <Navigate to="/login" />
  ) : (
    <>
      <Body>
        <Menu>
          <MenuOption onClick={() => navigate('/notes')}>Notas</MenuOption>
          <MenuOption onClick={() => navigate('/')}>Archivadas</MenuOption>
          <MenuOption onClick={DoLogOut}>Cerrar Sesión</MenuOption>
        </Menu>

        <MainContainer>
          <Outlet />
        </MainContainer>
      </Body>

      {/*<button type="button" onClick={DoLogOut}>Logout</button>
            <br/>*/}
    </>
  );
};
export default PrivateLayout;
