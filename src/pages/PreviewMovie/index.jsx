import { Link } from "react-router-dom";
import { FiArrowLeft, FiClock } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Tag } from "../../components/Tag";
import StarRating from "../../components/StarRating";

import { Container, Content, Wrapper, Title, Details } from "./styles";

export function PreviewMovie() {
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

        <Title>
          <h2>Interstellar</h2>
          <StarRating />
        </Title>

        <Details>
          <img src="https://github.com/rodrigorgtic.png" alt="" />

          <span>Por Rodrigo Sousa</span>

          <FiClock />

          <span>21/01/2021 as 08:32</span>
        </Details>

        <Tag title="Suspense" />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eveniet
          optio, maxime corrupti voluptatum pariatur esse. At blanditiis iure
          eius, eum, nam veniam aut consequatur illum voluptatibus alias ab
          enim.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eveniet
          optio, maxime corrupti voluptatum pariatur esse. At blanditiis iure
          eius, eum, nam veniam aut consequatur illum voluptatibus alias ab
          enim.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eveniet
          optio, maxime corrupti voluptatum pariatur esse. At blanditiis iure
          eius, eum, nam veniam aut consequatur illum voluptatibus alias ab
          enim.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eveniet
          optio, maxime corrupti voluptatum pariatur esse. At blanditiis iure
          eius, eum, nam veniam aut consequatur illum voluptatibus alias ab
          enim.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eveniet
          optio, maxime corrupti voluptatum pariatur esse. At blanditiis iure
          eius, eum, nam veniam aut consequatur illum voluptatibus alias ab
          enim.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eveniet
          optio, maxime corrupti voluptatum pariatur esse. At blanditiis iure
          eius, eum, nam veniam aut consequatur illum voluptatibus alias ab
          enim.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eveniet
          optio, maxime corrupti voluptatum pariatur esse. At blanditiis iure
          eius, eum, nam veniam aut consequatur illum voluptatibus alias ab
          enim.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eveniet
          optio, maxime corrupti voluptatum pariatur esse. At blanditiis iure
          eius, eum, nam veniam aut consequatur illum voluptatibus alias ab
          enim.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eveniet
          optio, maxime corrupti voluptatum pariatur esse. At blanditiis iure
          eius, eum, nam veniam aut consequatur illum voluptatibus alias ab
          enim.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eveniet
          optio, maxime corrupti voluptatum pariatur esse. At blanditiis iure
          eius, eum, nam veniam aut consequatur illum voluptatibus alias ab
          enim.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eveniet
          optio, maxime corrupti voluptatum pariatur esse. At blanditiis iure
          eius, eum, nam veniam aut consequatur illum voluptatibus alias ab
          enim.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eveniet
          optio, maxime corrupti voluptatum pariatur esse. At blanditiis iure
          eius, eum, nam veniam aut consequatur illum voluptatibus alias ab
          enim.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eveniet
          optio, maxime corrupti voluptatum pariatur esse. At blanditiis iure
          eius, eum, nam veniam aut consequatur illum voluptatibus alias ab
          enim.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eveniet
          optio, maxime corrupti voluptatum pariatur esse. At blanditiis iure
          eius, eum, nam veniam aut consequatur illum voluptatibus alias ab
          enim.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eveniet
          optio, maxime corrupti voluptatum pariatur esse. At blanditiis iure
          eius, eum, nam veniam aut consequatur illum voluptatibus alias ab
          enim.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eveniet
          optio, maxime corrupti voluptatum pariatur esse. At blanditiis iure
          eius, eum, nam veniam aut consequatur illum voluptatibus alias ab
          enim.
        </p>
      </Content>
    </Container>
  );
}
