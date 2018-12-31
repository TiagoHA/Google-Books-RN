import styled from "styled-components/native";
import React from "react";

interface Props {
  onChangeText: Function;
}

export default function SearchBar(props: Props) {
  const { onChangeText } = props;
  return (
    <Container>
      <Input placeholder="Search" onChangeText={onChangeText} />
    </Container>
  );
}

const Container = styled.View`
  flex-direction: row;
`;

const Input = styled.TextInput`
  flex: 1;
  padding: 5px;
  border-width: 0.5px;
  border-color: lightgray;
  color: black;
  margin-bottom: 5px;
`;
