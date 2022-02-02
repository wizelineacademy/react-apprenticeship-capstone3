import styled from "styled-components";
import palette from "../../themes/palette";

const Button = styled.button`
    border-radius: 20px;
    background-color: ${palette.main};
    background: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.color};
    padding: 8px 16px;
    border: transparent;
    font-family: 'Zen Kaku Gothic Antique', sans-serif !important;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 120px;
`;

const Icon = styled.img`
    width: 25px;
    height: 25px;
    margin-left: 10px;
`;

export { Button, Icon };