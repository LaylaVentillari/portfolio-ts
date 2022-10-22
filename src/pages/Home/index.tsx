import { Card } from "../../components/Card";
import { Education } from "../../components/Education";
import { Footer } from "../../components/Footer";
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
      <Education/>
      <Footer/>
    </HomeContainer>
   );  
}