import React, { useEffect, useState } from 'react';

import Layout from '../../components/Layout/Layout.jsx';
import Note from '../../components/Note/Note';
const ArchivePage = () => {
  const [archive, setArchive] = useState([]);
  useEffect(() => {
    const archiveData = JSON.parse(localStorage.getItem('archive'))
    
    if (archiveData) setArchive(archiveData);
}, [])
  return (
    <Layout>
      <div className="Archive-page">
      {
        archive.length !== 0 ? (
          archive.map(note => (
            <Note key={note.id} content={note.content} color={note.color} />
          ))
        ) : 'there are not Notes saved yet'
      }
      </div>
  </Layout>
  );
}

export default ArchivePage;
