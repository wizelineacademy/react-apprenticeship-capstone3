import React from "react";
import styled from "styled-components";

const NoteCointainer = styled.div`
  height: 200px;
  width: 250px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  margin: 10px;
  padding: 8px;
  background-color: orange;
`

const Note = ({ noteId, text }) => {

    return (
        <NoteCointainer> 
                <p>{text}</p>
        </NoteCointainer>
    );
};
export default Note;