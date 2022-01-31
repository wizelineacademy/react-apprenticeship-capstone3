import React from 'react';

// import { MainContainer, Form, Textarea, Button } from './NoteCreator.styles';

const Note = ({content, color}) => {
  return (
    <div style={{ backgroundColor: color, height: '200px', width: '250px' }}>
       {content}
    </div>
  );
}
export default Note;
