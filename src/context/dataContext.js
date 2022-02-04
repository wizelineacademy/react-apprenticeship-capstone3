import React, { useEffect, useState, useContext } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { app } from '../config/firebaseConfig';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const DataContext = React.createContext();

export const DataProvider = ({ children }) => {
  const [notes, setNotes] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const db = getFirestore(app);

  useEffect(async () => {
    if (!notes) {
      const notesCollecionRef = collection(db, 'notas');
      const notesSnapshots = await getDocs(notesCollecionRef);
      const notesList = notesSnapshots.docs.map((doc) => doc.data());
      console.log(notesList);
      setNotes(notesList);
    }
  }, []);

  const addNote = (text, color) => {
    let newId = !!notes.length
      ? Math.max.apply(
          Math,
          notes.map(function (note) {
            return Number(note.id);
          })
        ) + 1
      : 1;
    let newNote = {
      id: newId,
      texto: text,
      color: color,
      isArchived: false
    };

    setDoc(doc(db, 'notas', newId.toLocaleString()), newNote).then(() => {
      setNotes([...notes, newNote]);
    });
  };

  const edditNote = (note, newText) => {
    let newNote = {
      id: note.id,
      texto: newText,
      color: note.color,
      isArchived: note.isArchived
    };
    setDoc(doc(db, 'notas', note.id.toLocaleString()), newNote).then(() => {
      let newArray = [...notes];
      newArray[newArray.findIndex((n) => n.id == note.id)] = newNote;
      setNotes(newArray);
    });
  };

  const archiveNote = (noteId) => {
    let note = notes.find((n) => n.id == noteId);
    let newNote = {
      ...note,
      isArchived: true
    };
    edditNote(newNote, newNote.texto);
  };

  const value = { notes, searchTerm, addNote, edditNote, archiveNote, setSearchTerm };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('Error using context');
  }
  return context;
};
