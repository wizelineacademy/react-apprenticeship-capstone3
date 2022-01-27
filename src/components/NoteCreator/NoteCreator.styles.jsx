import styled from "styled-components";

const MainContainer = styled.div`
    background: ${(props) => props.theme.backgroundColor};
    width: 400px;
    height: 300px;
`;

const Form = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

const Textarea = styled.textarea`
    width: 80%;
    height: 60%;
    color: pink;
    background: black;
`;

const Button = styled.button`
    border-radius: 20px;
    color: pink;
    background: black;
    border: transparent;
`;


export { MainContainer, Form, Textarea, Button };