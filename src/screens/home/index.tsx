import React, { Component } from "react";
import {
  Text,
  View,
  TextInputProps,
  TextProps,
  TouchableOpacityProps,
  ViewProps
} from "react-native";
import styled from "styled-components/native";
import Divider from "src/commons/components/atoms/divider";

export default class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <Title>Digite o Livro dos seus sonhos</Title>
        <Divider />
        <Input />
        <Divider />
        <Button>
          <TextButton>Search</TextButton>
        </Button>
      </Container>
    );
  }
}

const Container = styled.SafeAreaView<ViewProps>`
  flex: 1;
  background-color: yellow;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const Title = styled.Text<TextProps>`
  font-weight: 600;
  font-family: Roboto-Bold;
  font-size: 18px;
`;

const Input = styled.TextInput<TextInputProps>`
  background-color: white;
  font-weight: 400;
  font-size: 16px;
  min-width: 150px;
  border-radius: 5px;
  padding: 5px;
`;

const Button = styled.TouchableOpacity<TouchableOpacityProps>`
  background-color: blue;
  border-radius: 25px;
  padding: 10px 30px;
`;

const TextButton = styled.Text<TextProps>`
  color: white;
  font-weight: 500;
  font-family: Roboto-Regular;
  font-size: 16px;
`;
