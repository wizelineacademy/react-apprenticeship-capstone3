import React, { useEffect, useState, useContext } from "react";
import { collection, getDocs } from "firebase/firestore";
import { app } from "../config/firebaseConfig"
import { getFirestore } from "firebase/firestore"

const DataContext = React.createContext();

export const DataProvider = ({ children }) => {
    const [notes, setNotes] = useState(null);
    const db = getFirestore(app);

    useEffect(async () => {
        if (!notes) {
            const notesCollecionRef = collection(db, 'notas');
            const notesSnapshots = await getDocs(notesCollecionRef);
            const notesList = notesSnapshots.docs.map(doc => doc.data());
            console.log(notesList);
            setNotes(notesList);
        }
    }, [
    ]);

    const addNote = (text) => {

    }

    const value = { notes, addNote }

    return (
        <DataContext.Provider
            value={value}
        >
            {children}
        </DataContext.Provider>
    );

};

export const useData = () => {
    const context = useContext(DataContext);
    if (context === undefined) {
        throw new Error('Error using context');
    }
    return context;
}




