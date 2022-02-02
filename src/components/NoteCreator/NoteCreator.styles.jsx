import styled from "styled-components";
import palette from "../../themes/palette";

const MainContainer = styled.div`
    width: 700px;
    height: 300px;
    border-radius: 20px;
    background-color: ${palette.main};
    @media screen and (max-width: 768px) {
        width: 100%;
        display: flex;
        justify-content: center;
    }
`;

const Form = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Textarea = styled.textarea`
    color: ${(props) => props.theme.color};
    background: ${(props) => props.theme.backgroundColor};
    border-radius: 20px;
    font-family: 'Zen Kaku Gothic Antique', sans-serif !important;
    text-align: center;
    padding: 16px 0px;
    width: 80%;
    height: 50%;
    margin: 20px;
    &::placeholder {
        font-size: 18px;
    }
    @media screen and (max-width: 768px) {
        width: 80%;
    }  
`;
const ToolsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    input {
        padding: 0;
        background: none;
        border: none;
        width: 40px;
        height: 40px;
    }
    span {
        font-family: 'Beth Ellen', cursive;
        font-size: 12px;
        color: ${(props) => props.theme.color};
    }
`;
const ColorContainer = styled.div`
    width: 130px;
    height: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const Button = styled.button`
    border-radius: 20px;
    background-color: ${palette.main};
    background: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.color};
    padding: 8px 16px;
    border: transparent;
    font-family: 'Zen Kaku Gothic Antique', sans-serif;
`;


export { MainContainer, Form, Textarea, Button, ToolsContainer, ColorContainer };