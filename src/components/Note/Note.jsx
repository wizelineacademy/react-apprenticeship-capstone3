import React from 'react';

import { MainContainer, Delete } from './Note.styles';

const Note = ({content, color, handleDeleteNote}) => {
  return (
    <MainContainer style={{ backgroundColor: color }}>
       {content}
       <Delete alt='delete' src='./images/bin.png' onClick={handleDeleteNote} />
    </MainContainer>
  );
}
export default Note;
