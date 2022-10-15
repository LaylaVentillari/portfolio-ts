import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme['base-subtitle']};
  border-radius: 8px;
  overflow: hidden;
  width: 346px;
  height: 208px;
  margin-left: 40px;
  gap: 2rem;
  margin-top: 2rem;
`
export  const ItemContainer = styled.div` 
  display: grid;
  column-gap: 15px;
  row-gap: 15px;
  grid: repeat(3, 16px) / auto-flow 84px;
  margin-left: 30px;

`
export  const TitleContainer = styled.div`
h1{
  font-family: 'Baloo 2';
  color: ${(props) => props.theme['base-label']};
  padding: 35px;
  margin-left: 30px;
  font-size: 20px;
}
`
export  const ItemsContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 90px;
height: 24px;
background: ${(props) => props.theme['base-label']};
border-radius: 30px;
p 
{
  color: ${(props) => props.theme['base-title']};
  font-size: 12px;
}
`



