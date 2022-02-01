import React, {  useContext } from 'react';
import { Link } from 'react-router-dom';

import Layout from '../../components/Layout/Layout.jsx';
import Note from '../../components/Note/Note';
import useStorageNotes from '../../utils/hooks/useStorageNotes';
import { Context } from '../../context';
const ArchivePage = () => {
  const { state } = useContext(Context);
  const [notes] = useStorageNotes("archive", []);
 
  return (
    <Layout>
      <div className="Archive-page">
      <Link to="/">back to home</Link>
       aqui notas
      {
        state.searched.length === 0
          ? notes.length !== 0 ? (
            notes.map(note => (
              <Note key={note.id} content={note.content} color={note.color} />
            ))
          ) : 'there are not Notes saved yet'
          : (
            state.searched.map(note => (
              <Note key={note.id} content={note.content} color={note.color} />
            ))
          )
      }
      </div>
  </Layout>
  );
}

export default ArchivePage;
