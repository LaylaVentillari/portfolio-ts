import { Container, EducationContainer, TitleContainer } from "./styles"


export function Education(){
 return(
  <EducationContainer>
    <TitleContainer><h1>Education</h1></TitleContainer>
    <Container>
      <ul>
        <li><h1>Rocketseat</h1><p>Ignite</p><p>2022</p></li>
        <li><h1>Bootcamp Santander</h1><p>Full Stack Developer</p><p>2022</p></li>
        <li><h1>Data Science Academy</h1><p>Python para Análise de dados</p><p>2022</p></li>
      </ul>
    </Container>
    
    </EducationContainer>
 )
}