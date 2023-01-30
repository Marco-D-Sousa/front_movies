import styled from "styled-components";
import backgroundImg from "../../assets/cinema.jpg";

export const Container = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.BG};
  display: flex;
  font-family: 'Roboto Slab';
`;

export const Form = styled.form`
  padding: 0 136px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > h2 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin: 20px 0;
  }

  > p {
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-top: 10px;
  }

  > a {
    margin-top: 124px;
    margin-left: 37%;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center; 
  background-size: cover;
`;
