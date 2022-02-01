/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { useHistory } from 'react-router-dom';

import ThemeButton from '../ThemeButton/ThemeButton';
import { HeaderContainer } from './Header.styles';
import useSearch from '../../utils/hooks/useSearch';
import { Context } from '../../context';
import { auth } from '../../firebase-config';

const Header = () => {
  const { handleSearch, searchedNotes } = useSearch();
  const { state, dispatch } = useContext(Context);
  const user = JSON.parse(localStorage.getItem('currentUser'))
  const history = useHistory();

  useEffect(() => {
    dispatch({
        type: 'SAVE_SEARCHED_NOTES',
        payload: {
            ...state,
            searched: searchedNotes,
        },
    });
  }, [searchedNotes]);

  const handleSignOut = async () => {
    await signOut(auth);
    history.push('/login');
  };

  return (
    <HeaderContainer>
        <p>title</p>
        <ThemeButton />
        <input type="search" placeholder="look for notes" onChange={handleSearch} />
        {
          user 
          ? (
              <><p>{user.user.email}</p><button onClick={handleSignOut}>sign out</button></>
            )
          : null
        }
    </HeaderContainer>
  );
}
export default Header;
