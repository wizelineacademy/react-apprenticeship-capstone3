import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import Layout from '../../components/Layout/Layout.jsx';
import NoteCreator from '../../components/NoteCreator/NoteCreator';
import { MainContainer } from './Home.styles';
import { Context } from '../../context';
const HomePage = () => {
  const { state } = useContext(Context);
  useEffect(() => {
    localStorage.setItem('archive', JSON.stringify(state.archive))
}, [state.archive])

  return (
    <Layout>
      <MainContainer>
        <NoteCreator />
        <Link to="/archive">go to archive</Link>
      </MainContainer>
    </Layout>
  );
}

export default HomePage;
