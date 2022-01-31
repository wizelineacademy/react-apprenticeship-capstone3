import React, {  useContext } from 'react';

import Layout from '../../components/Layout/Layout.jsx';
import Note from '../../components/Note/Note';
import useSearch from '../../utils/hooks/useSearch';
import { Context } from '../../context';
const ArchivePage = () => {
  const { notes } = useSearch();
  const { state } = useContext(Context);
 
  return (
    <Layout>
      <div className="Archive-page">
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
