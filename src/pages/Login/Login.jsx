import React from 'react';
const LoginPage = () => {
  return (
    <div className="Login-page" style={{ width: '100%', height: '100vh',  display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
       <form style={{ width: '500px', height: '400px', display: 'flex', flexDirection: 'column'}}>
         <input type='text' placeholder='enter your email'/>
         <input type='password' placeholder='enter your password'/>
         <button type='submit'>log in</button>
       </form>
    </div>
  );
}

export default LoginPage;
