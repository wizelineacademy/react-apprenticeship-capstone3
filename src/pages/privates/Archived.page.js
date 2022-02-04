import React, { useState, useContext, useEffect } from 'react';
import { useData } from '../../context/dataContext';
import Note from '../../components/Note.Component';
import AddNote from '../../components/AddNote.Component';

const Archived = ({ history }) => {
  const { notes } = useData();

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
        {!!notes?.length &&
          notes.filter((n) => n.isArchived).map((note) => <Note key={note.id} note={note} />)}
        {(!notes || !notes.filter((n) => n.isArchived).length) && (
          <p>No hay notas archivadas para mostrar</p>
        )}
      </div>
    </>
  );
};
export default Archived;