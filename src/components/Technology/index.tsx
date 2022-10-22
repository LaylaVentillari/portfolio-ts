import { Container, ItemContainer, ItemsContainer, TitleContainer } from "./styles";


export function Technology(){
  return(
    <Container>
      <TitleContainer>
        <h1>Technologies</h1>
      </TitleContainer>
      <ItemContainer>
        <ItemsContainer><p>JavaScript</p></ItemsContainer>
        <ItemsContainer><p>ReactJs</p></ItemsContainer>
        <ItemsContainer><p>TypeScript</p></ItemsContainer>
        <ItemsContainer><p>Angular</p></ItemsContainer>
        <ItemsContainer><p>NodeJs</p></ItemsContainer>
        <ItemsContainer><p>Python</p></ItemsContainer>
        <ItemsContainer><p>Git</p></ItemsContainer>
        <ItemsContainer><p>Github</p></ItemsContainer>
        <ItemsContainer><p>Java</p></ItemsContainer>
        </ItemContainer>
      
    </Container>
  )
}