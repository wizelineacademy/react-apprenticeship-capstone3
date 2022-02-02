import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import Layout from '../../components/Layout/Layout.jsx';
import NoteCreator from '../../components/NoteCreator/NoteCreator';
import Note from '../../components/Note/Note';
import { MainContainer, NoteStore, LinkText } from './Home.styles';
import { Context } from '../../context';
const HomePage = () => {
  const { state } = useContext(Context);
  const [notes, setNotes] = useState([]);
  localStorage.setItem("archive", JSON.stringify(state.archive));
  
  // useEffect(() => {
  //   const notesStoraged = JSON.parse(localStorage.getItem('archive'));
  //   if(notesStoraged) {
  //     setNotes(notesStoraged);
  //     //setNotes(current => [...current, notesStoraged]);
  //   }
  // }, [state.archive]);
  useEffect(() => {
    const notesStoraged = JSON.parse(localStorage.getItem('archive'));
    if(notesStoraged) {
      setNotes(notesStoraged);
    }
  }, [state.archive]);

  // useEffect(() => {
  //   localStorage.setItem("archive", JSON.stringify(state.archive));
  // }, [state.archive]);

  return (
    <Layout>
      <MainContainer>
        <NoteCreator />
        <Link to="/archive"><LinkText>see all your notes</LinkText></Link>
        <NoteStore>
          {
            notes
            ? notes.map(note => (
              <Note key={note.id} content={note.content} color={note.color}/>
            ))
            : 'no notes yet'
          }
        </NoteStore>
      </MainContainer>
    </Layout>
  );
}

export default HomePage;
