import React from "react";
import styled from "styled-components";
import { useData } from "../context/dataContext";

const AddNoteContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  margin: 10px;
  padding: 8px;
  background-color: transparent;
`

const AddNote = ({}) => {

    const { addNote } = useData();

    const add = () => {
      addNote();
    }

    return (
        <AddNoteContainer> 
                <p>Añadir nota</p>
                <input type={"text"}/>
                <button onClick={add}>Aceptar</button>
        </AddNoteContainer>
    );
};
export default AddNote;