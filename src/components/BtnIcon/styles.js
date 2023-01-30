import styled from "styled-components";

export const Container = styled.button`
  width: 200px;
  height: 50px;
  margin-top: 16px;
  padding: 0 16px;
  border: 0;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: 'Roboto Slab';
  font-weight: 500;
  font-size: 1rem;

  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  &:disabled {
    opacity: 0.5;
  }
`;