import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: rgba(255, 133, 155, .05);

  border: none;
  border-radius: 10px;

  padding: 22px;
  margin-bottom: 16px;

  text-align: left;

  > h1 {
    flex: 1;
    font-family: 'Roboto Slab';
    text-align: left;
    font-weight: 700;
    font-size: 24px;

    margin-bottom: 8px;

    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > p {
    font-family: 'Roboto';
    font-size: 16px;

    margin-top: 14px;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > footer {
    width: 100%;
    display:flex;
    margin-top: 24px;
  }
`;