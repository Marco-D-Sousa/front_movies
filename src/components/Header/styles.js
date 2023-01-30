import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;
  padding: 0 100px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  gap: 64px;
  justify-content: space-between;
  align-items: center;
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > img {
    margin-left: 10px;
    width: 56px;
    height: 56px;

    border-radius: 50%;
  }

  > div {
    width: max-content;
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;
    align-items: flex-end;

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    strong {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const Logo = styled.div`
  padding-bottom: 10px;
  
  font-size: 24px;
  font-weight: 700;
  font-family: 'Roboto Slab';
  color: ${({ theme }) => theme.COLORS.PINK};
`;
