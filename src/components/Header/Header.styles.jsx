import styled from "styled-components";

import palette from "../../themes/palette";

const Title = styled.h2`
    font-family: 'Beth Ellen', cursive;
    color: ${(props) => props.theme.color};
`;
const HeaderContainer = styled.header`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${palette.main};
    @media screen and (max-width: 768px) {
        flex-direction: column;
        height: auto;
        padding: 20px;
    }
`;

const Icon = styled.img`
    width: 40px;
    height: 40px;
    margin-left: 10px;
`;

const TitleContainer = styled.div`
    width: 300px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const LoginContainer = styled(TitleContainer)`
    font-weight: 600;
    font-size: 16px;
    font-family: 'Zen Kaku Gothic Antique', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
        margin: 0;
    }
    button {
        background: transparent;
        font-family: 'Beth Ellen', cursive;
        color: ${(props) => props.theme.color};
        border: none;

    }
`;

const Input = styled.input`
    font-size: 12px;
    font-family: 'Beth Ellen', cursive;
    letter-spacing: 1.5px;
    padding: 8px;
    margin: 10px;
    background: ${(props) => props.theme.backgroundColor};
    border: 1px solid pink;
    width: 300px;
    border-radius: 25px;
    text-align: center;
    color: ${(props) => props.theme.color};
    @media screen and (max-width: 425px) {
        width: 80%;
    }
    &:focus,
    &:active {
        outline: none;
    }
`;

export { HeaderContainer, Title, Icon, TitleContainer, Input, LoginContainer };