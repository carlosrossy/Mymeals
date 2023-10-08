import styled from "styled-components/native";

export const Button = styled.TouchableOpacity``;

export const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ContainerPhoto = styled.TouchableOpacity`
  width: 170px;
  height: 170px;
  border: 1px solid ${({ theme }) => theme.colors.PRIMARY};
  background-color: ${({ theme }) => theme.colors.WHITE};
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const Footer = styled.View`
  background-color: ${({ theme }) => theme.colors.PRIMARY};
  align-items: center;
  justify-content: center;
  padding: 15px 0;
`;

export const Image = styled.Image.attrs({
  resizeMode: "cover",
})`
  height: 170px;
  width: 170px;
  border-radius: 8px;
`;

