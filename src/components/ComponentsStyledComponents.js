import styled from "styled-components";

export const NoteCointainer = styled.div`
  height: 200px;
  width: 235px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  margin: 10px;
  padding: 8px;
  background-color: ${({color})=> ( color )};
  display: inline-flex;
  position: relative;
`
export const NoteOptions = styled.button`
    position: absolute;
    top: 85%;
    left: ${({left})=> ( `${left}%` )}
`

export const EditNote = styled.input`
    height: 80%;
    width: 100%;
`

export const AddNoteContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  margin: 10px;
  padding: 8px;
  background-color: transparent;
`