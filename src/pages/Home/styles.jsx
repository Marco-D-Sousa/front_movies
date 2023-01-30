import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div` 
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
    
  background-color: ${({ theme }) => theme.COLORS.BG};
`;

export const Content = styled.div`
  padding: 0 64px;
  overflow-y: auto;
`;

export const Top = styled.div`
  width: 100%;
  padding: 0 64px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  font-size: 32px;
  font-weight: 400;
  font-family: 'Roboto Slab';
`;

export const Button = styled.button`
  width: 200px;
  height: 56px;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  border: none;
  border-radius: 10px;
`;

