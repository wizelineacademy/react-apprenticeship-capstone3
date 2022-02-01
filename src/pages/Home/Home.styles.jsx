import styled from "styled-components";

const MainContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 32px;
`;

const NoteStore = styled.div`
    width: calc(100% - 24px);
    padding: 12px;
    height: auto;
    min-height: 500px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
export { MainContainer, NoteStore };