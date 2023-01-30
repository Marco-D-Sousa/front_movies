import { FiPlus, FiSearch } from 'react-icons/fi';
import { Container, Content, Top, Button } from './styles';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Note } from '../../components/Note';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';
import { BtnIcon } from '../../components/BtnIcon';
import StarRating from '../../components/StarRating';

export function Home() {
  return (
    <Container>
      <Header />

      <Top>
        <h2>Meus Filmes</h2>
        <BtnIcon icon={FiPlus} text="Adicionar filme" />
      </Top>
      
      <Content>
          <Note data={{
            title: 'React',     
            text: 'O filme é muito bom',
            tags: [
              {id: '1', name: 'react'},
              {id: '2', name: 'nodejs'}, 
            ]}}
          />
      </Content>

    </Container>
  );
};
