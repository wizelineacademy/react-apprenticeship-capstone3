import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginByUserAndPass } from '../../providers/Login.api';
import styled from 'styled-components';

const LoginContainer = styled.div`
  padding: 25px;
  background-color: lightblue;
  margin-right: 30px;
  margin-left: 30px;
`;

const LogginButton = styled.button`
  padding: 25px;
  background-color: lightblue;
  background-color: #4caf50;
  width: 100%;
  color: black;
  padding: 15px;
  margin: 10px 0px;
  border: none;
  cursor: pointer;
`;

const LogginInput = styled.input`
  width: 100%;
  margin: 8px 0;
  padding: 12px 20px;
  display: inline-block;
  border: 2px solid green;
  box-sizing: border-box;
`;

const Login = ({ history }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const DoLogin = () => {
    loginByUserAndPass(email, pass)
      .then((user) => {
        setError(false);
        navigate('/notes');
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <>
      <center>
        {' '}
        <h1> Welcome to Capstone 3</h1>{' '}
      </center>
      <form>
        <LoginContainer>
          <label>Username : </label>
          <LogginInput
            type="text"
            placeholder="Enter Username"
            name="username"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password : </label>
          <LogginInput
            type="password"
            placeholder="Enter Password"
            name="password"
            required
            equired
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <LogginButton onClick={DoLogin} type="button">
            Login
          </LogginButton>
          {!!error && <p>Usuario o contraseña incorrecta</p>}
        </LoginContainer>
      </form>
    </>
  );
};
export default Login;
