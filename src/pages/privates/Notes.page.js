import React, { useState, useContext, useEffect } from "react";
import { useData } from "../../context/dataContext";
import  Note  from "../../components/Note.Component"
import  AddNote  from "../../components/AddNote.Component"

const Notes = ({ history }) => {

    const { notes } = useData();

    return (
        <>
            <AddNote/>
           {
               !!notes?.length && notes.map(
                   (note) => 
                    <Note key={note.id} text={note.texto} noteId={note.id}/>
                   )
           }
           {
               !notes && <p>No hay notas para mostrar</p> 
           }
        </>
    );
};
export default Notes;