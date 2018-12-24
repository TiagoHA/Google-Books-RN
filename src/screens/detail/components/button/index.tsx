import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

interface Props {
  title: string;
}

export default function Button(props: Props) {
  const { title } = props;
  return (
    <Touchable>
      <Text>{title}</Text>
    </Touchable>
  );
}

const Touchable = styled(TouchableOpacity)`
  background-color: blue;
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
