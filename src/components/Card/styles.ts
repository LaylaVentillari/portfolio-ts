import styled from "styled-components";

export const AsideContainer = styled.aside`
  background: ${(props) => props.theme['base-subtitle']};
  border-radius: 8px;
  overflow: hidden;
  width: 21.75rem;
  height: 18rem;
  margin-left: 40px;
  gap: 2rem;
  `
  export const AvatarContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 32px;

  img {
    width: 8rem; height: 8rem;
    border-radius: 50%;
    border: 2px solid  ${(props) => props.theme['base-label']};
  }
   
  strong {
    font-family: 'Baloo 2';
    color: ${(props) => props.theme['base-label']};
    font-size: 24px;
  }

  span {
    font-family: 'Roboto';
    color: ${(props) => props.theme['base-label']};
  }
    
  
  `