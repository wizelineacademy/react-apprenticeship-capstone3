import React from 'react';

import { MainContainer } from './Note.styles';

const Note = ({content, color}) => {
  return (
    <MainContainer style={{ backgroundColor: color }}>
       {content}
    </MainContainer>
  );
}
export default Note;
