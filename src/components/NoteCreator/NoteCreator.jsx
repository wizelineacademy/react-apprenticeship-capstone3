import React from 'react';

import { MainContainer, Form, Textarea, Button } from './NoteCreator.styles';
const NoteCreator = () => {
  return (
    <MainContainer>
        <Form>
            <imput type="text" placeholder="write a title" name="title" />
            <Textarea name="content" placeholder="write a note here"></Textarea>
            <Button>add note</Button>
        </Form>
    </MainContainer>
  );
}
export default NoteCreator;
