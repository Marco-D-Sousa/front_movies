import { Container, Form, Background, Wrapper } from "./styles";
import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";

import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignUp() {
  return (
    <Container>
      <Wrapper>
        <Form>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo o que assistir.</p>

          <h2>Crie sua conta</h2>

          <Input placeholder="Nome" type="text" icon={FiUser} />
          <Input placeholder="E-mail" type="text" icon={FiMail} />
          <Input placeholder="Senha" type="password" icon={FiLock} />

          <Button title="Cadastrar" />
        </Form>

        <Link to="/register" className="back">
          <FiArrowLeft />
          Voltar para o login
        </Link>
      </Wrapper>

      <Background />
    </Container>
  );
}
