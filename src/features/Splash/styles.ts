import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.SECONDARY};
`;

export const Header = styled.View`
  width: 100%;
  height: 80%;
  background-color: ${({ theme }) => theme.colors.PRIMARY};
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
  justify-content: center;
  align-items: center;
  padding-left: 44px;
  padding-right: 44px;
`;
