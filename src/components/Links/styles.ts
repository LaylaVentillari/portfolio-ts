import styled from "styled-components";

export const AsideContainer = styled.aside`
  background: ${(props) => props.theme['base-subtitle']};
  border-radius: 20px;
  overflow: hidden;
  width: 348px;
  height: 348px;
  margin-left: 40px;
  margin-top: 12rem;
  `

export const LinksContainer = styled.div`
display: flex;
align-items: center;
font-size: 16px;
padding: 10px;
border-radius: 10px;
margin: 1.3rem 0; 
color: ${(props) => props.theme['base-label']};
font-family: 'Roboto';
> svg {
  margin: 0 20px;
  }
`

