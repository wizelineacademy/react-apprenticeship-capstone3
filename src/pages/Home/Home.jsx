/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import Layout from '../../components/Layout/Layout.jsx';
import NoteCreator from '../../components/NoteCreator/NoteCreator';
import Note from '../../components/Note/Note';
import { MainContainer, NoteStore, LinkText } from './Home.styles';
import { Context } from '../../context';
import useDeleteNote from '../../utils/hooks/useDeleteNote';
const HomePage = () => {
  const { state } = useContext(Context);
  const [notes, setNotes] = useState([]);
  localStorage.setItem("archive", JSON.stringify(state.archive));
  const { handleDeleteNote } = useDeleteNote(notes);

  useEffect(() => {
    const notesStoraged = JSON.parse(localStorage.getItem('archive'));
    if(notesStoraged) {
      setNotes(notesStoraged);
    }
  }, [state.archive]);

  useEffect(() => {
    setNotes((current) => current = state.searched)
    if(state.searched.length === 0)  setNotes(notes);
  }, [state.searched]);

  return (
    <Layout>
      <MainContainer>
        <NoteCreator />
        <Link to="/archive"><LinkText>see all your notes</LinkText></Link>
        <NoteStore>
          {
            notes
            ? notes.map(note => (
              <Note key={note.id} content={note.content} color={note.color} handleDeleteNote={() => handleDeleteNote(note.id)}/>
            ))
            : 'no notes yet'
          }
        </NoteStore>
      </MainContainer>
    </Layout>
  );
}

export default HomePage;
