import { Container } from "./styles";

export function BtnIcon({icon: Icon, text}) {
  return(
    <Container>
      {Icon && <Icon size={20} />}
      <p>{text}</p>
    </Container>
  )
}