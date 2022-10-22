import styled from "styled-components";

export const EducationContainer = styled.div`
display: flex;
justify-content: center;
width: 348px;
height: 346px;
margin-left: 40px;
border-radius: 8px;
background: ${(props) => props.theme['base-subtitle']};
position: relative;
`

export const TitleContainer = styled.div`
width: 141px;
position: absolute;
margin-right: 150px;

h1 {
  font-size: 20px;
  font-weight: 700px;
  font-family: 'Baloo 2';
  color: ${(props) => props.theme['base-label']};
  padding: 35px;
}

`
export const Container = styled.div`
display: flex;
flex-direction: column;
width: 200px;
height: 246px;
margin-top: 80px;
color: ${(props) => props.theme['base-label']};
line-height: 1.6;
font-family: 'Roboto';
h1{
  font-size: 16px;
}


`