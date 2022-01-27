import React from 'react';

import Layout from '../../components/Layout/Layout.jsx';
import NoteCreator from '../../components/NoteCreator/NoteCreator';
import { MainContainer } from './Home.styles';
const HomePage = () => {
  return (
    <Layout>
      <MainContainer>
        <NoteCreator />
      </MainContainer>
    </Layout>
  );
}

export default HomePage;
