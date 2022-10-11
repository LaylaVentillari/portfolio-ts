import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme['base-subtitle']};
  margin-left: 40%;
  margin-top: 2rem;
  width: 50rem;
  height: 5rem;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  input {
    width: 25rem;
    height: 3rem;
    margin-right: 15rem;
    background: ${(props) => props.theme['base-subtitle']};
    border: none;
    color: ${(props) => props.theme['base-label']};
    font-size: 20px;
    font-family: 'Baloo 2';
  }

  button {
    background: ${(props) => props.theme['base-subtitle']};
    border: none;
    color: ${(props) => props.theme['base-label']};
    font-family: 'Roboto';
  }
  `
