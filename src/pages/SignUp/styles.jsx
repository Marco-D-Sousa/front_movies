import styled from "styled-components";
import backgroundImg from "../../assets/cinema.jpg";

export const Container = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.BG};
  display: flex;
`;

export const Form = styled.form`
  padding: 0 136px;
  
  font-family: 'Roboto Slab';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > h2 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin: 48px 0;
  }

  > p {
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-top: 10px;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center; 
  background-size: cover;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > :nth-child(2) {
    display: flex;
    gap: 8px;
    font-size: 18px;
    margin-top: 42px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;