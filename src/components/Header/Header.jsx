import React, { useContext, useEffect } from 'react';

import ThemeButton from '../ThemeButton/ThemeButton';
import { HeaderContainer } from './Header.styles';
import useSearch from '../../utils/hooks/useSearch';
import { Context } from '../../context';

const Header = ({ user }) => {
  const { handleSearch, searchedNotes } = useSearch();
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    dispatch({
        type: 'SAVE_SEARCHED_NOTES',
        payload: {
            ...state,
            searched: searchedNotes,
        },
    });
}, [searchedNotes]);

  return (
    <HeaderContainer>
        <p>title</p>
        <ThemeButton />
        <p>menu</p>
        <input type="search" placeholder="look for notes" onChange={handleSearch} />
        <p>{user}</p>
    </HeaderContainer>
  );
}
export default Header;
