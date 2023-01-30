import { RiShutDownLine } from "react-icons/ri";
import { Input } from "../Input";
import { Container, Profile, Logo } from "./styles";

export function Header() {
  return(
    <Container>
      <Logo>
        RocketMovies
      </Logo>
      
      <Input placeholder="Pesquisar pelo título"/>
      
      <Profile to="/profile">
        <div>
          <strong>Rodrigo Gonçalves</strong>
          <span>sair</span>
        </div>
        <img src="https://github.com/rodrigorgtic.png" />
      </Profile>
    </Container>
  );
};
