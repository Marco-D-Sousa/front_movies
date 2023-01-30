import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { NoteItem } from "../../components/NoteItem";

import { Container, Content, Wrapper, Title, Formulario, Marcadores, Final } from "./styles";

export function CreateMovie() {
  return (
    <Container>
      <Header />

      <Content>
        <Wrapper>
          <Link to="/register" className="back">
            <FiArrowLeft />
            Voltar
          </Link>
        </Wrapper>

        <Title>Novo filme</Title>

        <Formulario>
          <header>
            <Input placeholder="Titulo" />
            <Input placeholder="Sua nota (de 0 a 5)" />
          </header>

          <main>
            <TextArea placeholder="Observacoes" />
          </main>
        </Formulario>

        <h2>Marcadores</h2>

        <Marcadores>
          <NoteItem value="Testando"/>
          <NoteItem value="Robocop"/>
          <NoteItem isNew placeholder="Nova tag" />
        </Marcadores>

        <Final>
          <button className="excluir">Excluir filme</button>
          <button className="salvar">Salvar alteracoes</button>
        </Final>
        
        
      </Content>
    </Container>
  );
}
