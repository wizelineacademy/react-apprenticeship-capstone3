import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import Layout from '../../components/Layout/Layout.jsx';
import NoteCreator from '../../components/NoteCreator/NoteCreator';
import Note from '../../components/Note/Note';
import { MainContainer, NoteStore } from './Home.styles';
import useStorageNotes from '../../utils/hooks/useStorageNotes';
import { Context } from '../../context';
const HomePage = () => {
  const { state } = useContext(Context);
  const [notes, setNotes] = useStorageNotes("archive", []);

 useEffect(() => {
  setNotes(state.archive)
  }, [setNotes, state.archive])

  return (
    <Layout>
      <MainContainer>
        <NoteCreator />
        <NoteStore>
          {
          notes !== 0 ? (
            notes.map(note => (
                <Note key={note.id} content={note.content} color={note.color} />
              ))
            ) : 'there are not Notes saved yet'
          }
        </NoteStore>
        <Link to="/archive">go to archive</Link>
      </MainContainer>
    </Layout>
  );
}

export default HomePage;
