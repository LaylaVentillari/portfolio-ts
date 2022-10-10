import { AsideContainer, LinksContainer } from './styles'
import { DiscordLogo, Envelope, GithubLogo, Globe, LinkedinLogo, MapPin } from 'phosphor-react'



export function Links(){
  
    return (
      <AsideContainer>
      <LinksContainer>
        <MapPin size={24}/> 
        <span>Brasil</span>
      </LinksContainer>
      <LinksContainer>
      <GithubLogo size={24}/> 
        <span>LaylaVentillari</span>
      </LinksContainer>
      <LinksContainer>
        <LinkedinLogo size={24}/>
        <span>layla-ventilari-135574145</span>
      </LinksContainer>
      <LinksContainer>
      <DiscordLogo size={24}/> 
        <span>nite#4379</span>
      </LinksContainer>
      <LinksContainer>
      <Envelope size={24}/> 
        <span>ventilarilayla@gmail.com</span>
      </LinksContainer>
    </AsideContainer>
    );
  }
   