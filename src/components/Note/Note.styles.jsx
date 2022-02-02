import styled from "styled-components";

const MainContainer = styled.div`
    width: calc(100% /4);
    min-height: 200px;
    padding: 12px;
    border-radius: 10px;
    overflow: scroll;
    display: flex;
    justify-content: center;
    align-items: center;
    background: lightgray;
    border: solid 1px gray;
    color: ${(props) => props.theme.color};
    font-family: 'Zen Kaku Gothic Antique', sans-serif !important;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 20px;
    }
`;

export { MainContainer };