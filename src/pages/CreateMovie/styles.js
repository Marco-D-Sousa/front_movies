import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BG};
  overflow-y: auto;
  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  padding: 0 100px;

  > h2 {
    color: #999591;
    font-size: 20px;
    font-family: "Roboto Slab";

    margin-top: 40px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  font-size: 17px;
  margin-top: 40px;

  svg {
    font-size: 16px;
    margin-right: 6px;
  }

  a {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Title = styled.h1`
  margin-top: 24px;
  font-size: 36px;
  font-family: "Roboto Slab";
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-weight: 500;
`;

export const Formulario = styled.form`
  display: grid;
  grid-template-rows: 100px auto;

  grid-template-areas:
    "header"
    "obs";

  > header {
    margin-top: 40px;
    display: flex;
    gap: 40px;
  }

  > main {
    margin-top: 40px;
  }
`;

export const Marcadores = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: 24px;
  margin-bottom: 40px;
  background-color: #0d0c0f;
  border: none;
  border-radius: 8px;
  padding: 16px;

  display: flex;
  align-items: center;
  gap: 24px;
`;

export const Final = styled.div`
  width: 100%;
  height: fit-content;
  margin-bottom: 80px;
  display: flex;
  gap: 40px;

  > button {
    font-family: 'Roboto Slab';
    font-size: 18px;
    font-weight: 700;

    width: 100%;
    height: 56px;
    margin-top: 16px;
    padding: 0 17px;
    border: 0;
    border-radius: 10px;
  }

  > .excluir { 
    background-color: #0d0c0f;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > .salvar {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: #0d0c0f;
  }
`;
