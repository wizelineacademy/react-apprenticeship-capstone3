import React, {useState} from "react";
import { AddNoteContainer } from "./ComponentsStyledComponents";
import { useData } from "../context/dataContext";

const AddNote = ({ }) => {

  const [text, setText] = useState("");
  const [color, setColor] = useState("orange");
  const { setSearchTerm, searchTerm, addNote } = useData();

  const add = () => {
    if (text != "") {
      addNote(text, color);
      setText("");
    }
  }

  return (
    <AddNoteContainer>
      <p>Buscar</p>
      <input type={"text"} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <p>{"Añadir"} nota</p>
      <input type={"text"} value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={add}>Aceptar</button>
      <select name="select" value={color} onChange={(e) => setColor(e.target.value)}>
        <option value="oranje">Naranja</option>
        <option value="red">Rojo</option>
        <option value="blue">Azul</option>
      </select>
    </AddNoteContainer>
  );
};
export default AddNote;