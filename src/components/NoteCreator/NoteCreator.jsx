import React, { useState, useContext } from 'react';
import nextId from "react-id-generator";

import { MainContainer, Form, Textarea, Button, ToolsContainer, ColorContainer } from './NoteCreator.styles';
import { Context, actions } from '../../context';

const NoteCreator = () => {
    const [note, setNote] = useState({
        content: '',
        color: '',
        id: '',
    });
    const [disabledButton, setDisabledButton] = useState(true);
    const { dispatch } = useContext(Context);
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
        dispatch(actions.addNoteToArchive(note));
        setNote({ content: '', color: '', id: '', });
    };

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
            <ToolsContainer>
                <ColorContainer>
                    <span>Pick a color:</span>
                    <input type="color" onChange={(e) => HandleSaveInformation(e,'color')} />
                </ColorContainer>
                <Button type="submit" onClick={handleSaveNote} disabled={disabledButton}>add note</Button>
            </ToolsContainer>
        </Form>
    </MainContainer>
  );
}
export default NoteCreator;
