import React, { useState, useContext, useEffect } from "react";
import { useData } from "../../context/dataContext";
import  Note  from "../../components/Note.Component"

const Notes = ({ history }) => {

    const { notes } = useData();

    return (
        <>
           {
               !!notes?.length && notes.map(
                   (note) => 
                    <Note key={note.id} text={note.texto} noteId={note.id}/>
                   )
           }
        </>
    );
};
export default Notes;