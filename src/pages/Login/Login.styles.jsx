import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `
  
  const Title = styled.h2`
    text-align: center;
    letter-spacing: -1px;
    color: #F75DCB;
     font-family: 'Zen Kaku Gothic Antique', sans-serif;
  `;
  
  const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  
  const Input = styled.input`
    font-size: 12px;
     font-family: 'Zen Kaku Gothic Antique', sans-serif;
    letter-spacing: 1.5px;
    padding: 10px;
    margin: 10px;
    background: #333;
    border: none;
    width: 300px;
    border-radius: 20px;
    text-align: center;
    color: #e64398;
    &:active, &:focus {
        outline: none;
    }
  `;
  
  const Button = styled.button`
    width: 200px;
    border: solid 1px  #F75DCB;
    font-family: 'Zen Kaku Gothic Antique', sans-serif;
    margin-top: 1rem;
    padding: 0.4rem 0.6rem;
    font-size: 16px;
    border-radius: 25px;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: "0px 8px 15px rgba(0, 0, 0, 50%)";
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    color: #F75DCB;
  `
export { Button, Input, Container, Form, Title };