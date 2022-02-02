import React, {  useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Layout from '../../components/Layout/Layout.jsx';
import Note from '../../components/Note/Note';
import { Context } from '../../context';
import { LinkText, MainContainer } from './Archive.styles';

const ArchivePage = () => {
  const { state } = useContext(Context);
  const notes = JSON.parse(localStorage.getItem('archive')); 
  const [shownNotes, setShownNotes] = useState([]);
  // const [shownNotes, setShownNotes] = useState(state.archive);
  

  useEffect(() => {
    setShownNotes(notes);
  }, []);

  useEffect(() => {
    setShownNotes((current) => current = state.searched)
    if(state.searched.length === 0)  setShownNotes(notes);
  }, [state.searched]);

  // useEffect(() => {
  //   setShownNotes(state.searched)
  // }, [state.searched]);

  return (
    <Layout>
      <div className="Archive-page">
      <Link to="/"><LinkText>back to home</LinkText></Link>
      <MainContainer>
        {
          shownNotes
            ? shownNotes.map(note => (
              <Note key={note.id} content={note.content} color={note.color} />
            ))
            : 'Note not found'
        }
      </MainContainer>
      </div>
  </Layout>
  );
}

export default ArchivePage;
