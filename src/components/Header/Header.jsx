import React from 'react';
import { signOut } from 'firebase/auth';
import { useHistory } from 'react-router-dom';

import ThemeButton from '../ThemeButton/ThemeButton';
import { HeaderContainer, Title, Icon, TitleContainer, Input, LoginContainer } from './Header.styles';
import useSearch from '../../utils/hooks/useSearch';
import { auth } from '../../firebase-config';

const Header = () => {
  const { handleSearchedText } = useSearch();
  const user = JSON.parse(localStorage.getItem('currentUser'));
  const history = useHistory();
  const handleSignOut = async () => {
    await signOut(auth).then(function() {
      localStorage.clear();
    }).catch(function(error) {
      console.log(error)
    });
    history.push('/login');
  };
  
  const goToLogIn = () => history.push('/login');

  return (
    <HeaderContainer>
        <TitleContainer>
          <Title>keep your notes!</Title>
          <Icon src='./images/single-pencil.png'/>
        </TitleContainer>

        <Input type="search" placeholder="look for notes" onChange={(e) => handleSearchedText(e)} />
        {
          user 
          ? (
              <LoginContainer>
                <p>Hello, {user.user.email}!</p>
                <button onClick={handleSignOut}>sign out</button>
              </LoginContainer>
            )
          : (
            <LoginContainer>
              <button onClick={goToLogIn}>Log in</button>
            </LoginContainer>
          )
        }
        <ThemeButton />
    </HeaderContainer>
  );
}
export default Header;
