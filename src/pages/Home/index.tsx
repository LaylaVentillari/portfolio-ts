import { Card } from "../../components/Card";
import { Links } from "../../components/Links";
import { Projects } from "../../components/ProjectsSearch";
import { Technology } from "../../components/Technology";
import { HomeContainer } from "./styles";


export function Home() {
  return (
    <HomeContainer>
      <Projects/>
      <Card/>
      <Links/>
      <Technology/>
    </HomeContainer>
  );  
}