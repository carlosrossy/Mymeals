import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.SECONDARY};
`;

export const Header = styled.View`
  width: 100%;
  height: 72%;
  background-color: ${({ theme }) => theme.colors.PRIMARY};
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
  justify-content: center;
  align-items: center;
  padding-left: 44px;
  padding-right: 44px;
`;

export const ContainerButton = styled.View`
  min-width: 300px;
  max-width: 340px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
  align-self: center;
  align-items: center;
  position: absolute;
  bottom: 0;
`;
