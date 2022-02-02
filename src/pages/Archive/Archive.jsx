/* eslint-disable react-hooks/exhaustive-deps */
import React, {  useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Layout from '../../components/Layout/Layout.jsx';
import Note from '../../components/Note/Note';
import { Context } from '../../context';
import { LinkText, MainContainer } from './Archive.styles';
import useDeleteNote from '../../utils/hooks/useDeleteNote';

const ArchivePage = () => {
  const { state } = useContext(Context);
  const notes = JSON.parse(localStorage.getItem('archive')); 
  const [shownNotes, setShownNotes] = useState([]);
  const { handleDeleteNote } = useDeleteNote(notes);

  useEffect(() => {
    setShownNotes(state.archive);
  }, []);

  useEffect(() => {
    setShownNotes((current) => current = state.archive)
  }, [state.archive]);

  useEffect(() => {
    setShownNotes((current) => current = state.searched)
    if(state.searched.length === 0)  setShownNotes(state.archive);
  }, [state.searched]);

  return (
    <Layout>
      <div className="Archive-page">
      <Link to="/"><LinkText>back to home</LinkText></Link>
      <MainContainer>
        {
          shownNotes
            ? shownNotes.map(note => (
              <Note key={note.id} content={note.content} color={note.color} handleDeleteNote={() => handleDeleteNote(note.id)} />
            ))
            : 'Note not found'
        }
      </MainContainer>
      </div>
  </Layout>
  );
}

export default ArchivePage;
