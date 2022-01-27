import styled from "styled-components";

const HeaderContainer = styled.header`
    background: ${(props) => props.theme.backgroundColor};
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${(props) => props.theme.color};
`;

export { HeaderContainer };