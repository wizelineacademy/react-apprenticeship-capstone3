import React, { useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

import { Button, Input, Container, Form, Title } from './Login.styles';
import { useHistory } from 'react-router-dom';
import { auth } from '../../firebase-config';
const LoginPage = () => {
  const [ createUser, setCreateUser ] = useState(false);
  const [ isUser, setIsUser ] = useState(true);
  const [ error, setError ] = useState(true);
  const history = useHistory();
  const [user, setUser] = useState({})
  const [registerData, setRegisterData] = useState({
    email: '',
    password: '',
  });
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    console.log(user);
  });
  const getRegisterInformation = (e, inputType) => {
    const { value } = e.target;
      if(inputType === 'email' && createUser) setRegisterData(current => { return { ...current, email: value }})
      if(inputType === 'email' && isUser) setLoginData(current => { return { ...current, email: value}})
      if(inputType === 'password' && createUser) setRegisterData(current => { return { ...current, password: value }})
      if(inputType === 'password' && isUser) setLoginData(current => { return { ...current, password: value}})
  };

  const handleTYpeofForm = () => {
    setCreateUser(!createUser);
    setIsUser(!isUser)
  };

  const handleRegister = async () => {
    try {
      const userRegistered = await createUserWithEmailAndPassword(auth, registerData.email, registerData.password );
      localStorage.setItem('currentUser', JSON.stringify(userRegistered));
      history.push('/');
    } catch(error) {
      console.log(error.message);
      setError(error.message);
    }
  };

  const handleLogIn = async () => {
    try {
      const userlogged = await signInWithEmailAndPassword(auth, loginData.email, loginData.password );
      localStorage.setItem('currentUser', JSON.stringify(userlogged));
      setUser(userlogged);
      history.push('/');
    } catch(error) {
      console.log(error.message);
      setError(error.message);
    }
  };

  return (
    <Container>
       {
         createUser ? (
          <Form>
            <Title>create a user</Title>
            <Input type='text' placeholder='write a email' onChange={(e) => getRegisterInformation(e, 'email')}/>
            <Input type='password' placeholder='create a password' onChange={(e) => getRegisterInformation(e, 'password')}/>
            <Button type='button' onClick={handleRegister}>Create user</Button>
            {
              error ? <p>{error}</p> : null
            }
          </Form>
         ) : (
          <Form>
            <Title>log in</Title>
            <Input type='text' placeholder='enter your email' onChange={(e) => getRegisterInformation(e, 'email')}/>
            <Input type='password' placeholder='enter your password' onChange={(e) => getRegisterInformation(e, 'password')}/>
            {
              error ? <p>{error}</p> : null
            }
            <Button type='button' onClick={handleLogIn}>log in</Button>
            <Button type='button' onClick={handleTYpeofForm}>CREATE USER</Button>
          </Form>
         )
       }
    </Container>
  );
}

export default LoginPage;
