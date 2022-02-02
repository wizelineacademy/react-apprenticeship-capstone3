import styled from "styled-components";

const MainContainer = styled.div`
    width: calc(100% /4);
    min-height: 200px;
    padding: 12px;
    border-radius: 10px;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    margin: 16px 0px;
    justify-content: space-between;
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

const Delete = styled.img`
    width: 20px;
    height: 20px;
    margin-left: 10px;
    cursor: pointer;
    align-self: end;
`;

export { MainContainer, Delete };