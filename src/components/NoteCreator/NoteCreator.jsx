/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from 'react';
import nextId from "react-id-generator";

import { MainContainer, Form, Textarea, Button } from './NoteCreator.styles';
import { Context } from '../../context';

const NoteCreator = () => {
    const [note, setNote] = useState({
        content: '',
        color: '',
        id: '',
    });
    const [noteStore, setNoteStore] = useState([]);
    const [disabledButton, setDisabledButton] = useState(true);
    const { state, dispatch } = useContext(Context);

    const idGenerator = nextId();

     const HandleSaveInformation = (event, inputType) => {
        event.preventDefault();
        const { value } = event.target;
        if(inputType === 'content') setNote(current => ({...current, content: value,  id: idGenerator, }));
        if(inputType === 'color') setNote(current => ({...current, color: value }));
        if(note.content !== '') setDisabledButton(false); 
    };
    const handleSaveNote = (e) => {
        e.preventDefault();
        setNoteStore((current) => {
           return [...current, note];
        });
    };

    useEffect(() => {
        setNote({ content: '', color: '', id: '', });
        dispatch({
            type: 'ADD_NOTES_TO_ARCHIVE',
            payload: {
                ...state,
                archive: noteStore,
            },
        });
    }, [noteStore]);

  return (
    <MainContainer>
        <Form>
            <Textarea
                style={{ backgroundColor: note.color}}
                name="content"
                placeholder="write a note here"
                onChange={(e) => HandleSaveInformation(e,'content')}
                value={note.content}
            />
            <input type="color" onChange={(e) => HandleSaveInformation(e,'color')} />
            <Button type="submit" onClick={handleSaveNote} disabled={disabledButton}>add note</Button>
        </Form>
    </MainContainer>
  );
}
export default NoteCreator;
