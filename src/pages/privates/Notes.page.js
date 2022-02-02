import React from "react";
import { useData } from "../../context/dataContext";
import Note from "../../components/Note.Component"
import AddNote from "../../components/AddNote.Component"

const Notes = ({ history }) => {

    const { notes, searchTerm } = useData();

    return (
        <>
            <AddNote />
            {
                !!notes?.length && notes.filter(n => !n.isArchived && (searchTerm != "" ? n.texto.includes(searchTerm): true)).map(
                    (note) =>
                        <Note key={note.id} note={note} />
                )
            }
            {
               (!notes || !notes.length) && <p>No hay notas para mostrar</p>
            }
        </>
    );
};
export default Notes;