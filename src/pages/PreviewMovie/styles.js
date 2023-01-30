import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BG};
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding-bottom: 100px;
  overflow-y: auto;

  font-family: 'Roboto Slab';
`;

export const Wrapper = styled.div`
  display: flex;
  font-size: 17px;
  
  svg {
    font-size: 16px;
    margin-right: 6px;
  }
  
  a {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Title = styled.div`
  padding-top: 24px;
  display: flex;
  gap: 20px;
  align-items: center;
  align-self: center;
  
  font-size: 36px;
  
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Details = styled.div`
  padding-top: 24px;
  padding-bottom: 40px;
  
  font-family: 'Roboto';
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.WHITE};

  display: flex;
  gap: 8px;

  > img {
    border-radius: 50%;
    height: 20px;
  }

  svg {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 16px;
  }
`;

export const Content = styled.div`
  padding: 40px 100px;

  > p {
    margin-top: 40px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;