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
  const { handleDeleteNote } = useDeleteNote();
  var archive = localStorage.getItem('archive');
 
  useEffect(() => {
    setNotes(state.archive)
  },[]);
  useEffect(() => {
    if(!state.searchText) setNotes(state.archive)
    const searchedNotes = state.archive.filter(n => n.content.includes(state.searchText))
    setNotes(searchedNotes)
  },[state.searchText]);

  useEffect(() => {
    setNotes(state.archive)
  },[archive]);

  return (
    <Layout>
      <MainContainer>
        <NoteCreator />
        <Link to="/archive"><LinkText>see all your notes</LinkText></Link>
        <NoteStore>
          {
            notes
            ? notes.map(note => (
              <Note
                key={note.id}
                content={note.content}
                color={note.color}
                handleDeleteNote={() => handleDeleteNote(note.id)}
              />
            ))
            : 'no notes yet'
          }
        </NoteStore>
      </MainContainer>
    </Layout>
  );
}

export default HomePage;
