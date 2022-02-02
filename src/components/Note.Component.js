import React from "react";
import { useState } from "react/cjs/react.development";
import { useData } from "../context/dataContext";
import { NoteCointainer, NoteOptions, EditNote } from "./ComponentsStyledComponents";

const Note = ({ note }) => {
    const [editMode, setEditMode] = useState(false);
    const [newText, setNewText] = useState("");
    const {edditNote, archiveNote} = useData();

    const saveNote = () =>{
        setEditMode(false);
        edditNote(note, newText);
    }

    const onEditNote = () =>{
        setNewText(note.texto);
        setEditMode(true);
    }

    return (
        <NoteCointainer color={note.color}> 
                { !editMode && <p>{note.texto}</p> }
                { editMode && <EditNote type={"text"} value={newText} onChange={e => setNewText(e.target.value)}></EditNote>}
                <NoteOptions left={"70"} onClick={() => editMode ? saveNote() : onEditNote()}> {editMode ? "Guardar" : "Editar"}</NoteOptions>
                <NoteOptions left={"40"} onClick={() => archiveNote(note.id)}>Archivar</NoteOptions>
        </NoteCointainer>
    );
};
export default Note;