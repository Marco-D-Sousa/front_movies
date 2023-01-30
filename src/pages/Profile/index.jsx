import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Container, Form, Avatar, Header } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile() {
  return (
    <Container>
      <Header>
        <Link to="/">
          <FiArrowLeft /> 
          <span>Voltar</span> 
        </Link>  
      </Header>

      <Form>
        <Avatar>
          <img src="https://github.com/rodrigorgtic.png" alt="Foto do usuario" />

          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" />
          </label>
        </Avatar>

        <Input placeholder="Nome" type="text" icon={FiUser}/>
        <Input placeholder="E-mail" type="text" icon={FiMail}/>
        <Input placeholder="Senha Atual" type="password" icon={FiLock}/>
        <Input placeholder="Nova Senha" type="password" icon={FiLock}/>

        <Button title="Salvar" />
      </Form>
    </Container>
  );
}