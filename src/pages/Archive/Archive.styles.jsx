import styled from "styled-components";

const MainContainer = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    padding: 32px 0px;
`;
const LinkText = styled.p`
    font-family: 'Beth Ellen', cursive;
    color: ${(props) => props.theme.color};
    cursor: pointer;
`;

export { LinkText, MainContainer };