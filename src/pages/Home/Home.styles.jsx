import styled from "styled-components";

const MainContainer = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 32px 0px;
`;
const LinkText = styled.p`
    font-family: 'Beth Ellen', cursive;
    color: ${(props) => props.theme.color};
    cursor: pointer;
`;

const NoteStore = styled.div`
width: 100%;
    padding: 12px;
    height: auto;
    min-height: 500px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
`;
export { MainContainer, NoteStore, LinkText };