import React from "react";
import styled from "styled-components/native";

interface Props {
  title: string;
  onPress: Function;
}

export default function Button(props: Props) {
  const { title, onPress } = props;
  return (
    <Touchable onPress={onPress}>
      <Text>{title}</Text>
    </Touchable>
  );
}

const Touchable = styled.TouchableOpacity`
  background-color: #4A90E2;
  height: 40px;
  max-width: 120px;
  border-radius: 20px;
  justify-content: center;
  flex: 1;
  margin: 10px;
`;

const Text = styled.Text`
  color: white;
  font-weight: 500;
  font-family: Roboto-Medium;
  align-self: center;
  padding: 8px 15px;
`;
