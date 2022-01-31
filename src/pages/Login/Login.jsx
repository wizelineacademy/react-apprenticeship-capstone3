import React from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react/cjs/react.development';
import { auth } from '../../firebase-config';
const LoginPage = () => {
  const [ createUser, setCreateUser ] = useState(false);
  const [ isUser, setIsUser ] = useState(true);
  const [user, setuser] = useState({})
  const [registerData, setRegisterData] = useState({
    email: '',
    password: '',
  });
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  onAuthStateChanged(auth, (currentUser) => {
    setuser(currentUser);
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
      const user = await createUserWithEmailAndPassword(auth, registerData.email, registerData.password );
      // console.log('user', user);
    } catch(error) {
      console.log(error.message);
    }
  };

  const handleLogIn = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, registerData.email, registerData.password );
      // console.log('user', user);
    } catch(error) {
      // console.log(error.message);
    }
  };

  return (
    <div className="Login-page" style={{ width: '100%', height: '100vh',  display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
       {
         createUser ? (
          <form style={{ width: '500px', height: '400px', display: 'flex', flexDirection: 'column'}}>
            <h2>create a user</h2>
            <input type='text' placeholder='write a email' onChange={(e) => getRegisterInformation(e, 'email')}/>
            <input type='password' placeholder='create a password' onChange={(e) => getRegisterInformation(e, 'password')}/>
            <button type='button' onClick={handleRegister}>Create user</button>
          </form>
         ) : (
          <form style={{ width: '500px', height: '400px', display: 'flex', flexDirection: 'column'}}>
            <h2>log in</h2>
            <input type='text' placeholder='enter your email' onChange={(e) => getRegisterInformation(e, 'email')}/>
            <input type='password' placeholder='enter your password' onChange={(e) => getRegisterInformation(e, 'password')}/>
            <button type='button' onClick={handleLogIn}>log in</button>
            <button type='button' onClick={handleTYpeofForm}>CREATE USER</button>
          </form>
         )
       }
    </div>
  );
}

export default LoginPage;
