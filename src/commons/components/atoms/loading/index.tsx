import * as React from "react";
import { ActivityIndicator } from "react-native";
import { colors } from "src/styles";
import styled from "styled-components/native";

interface Props {
  children: JSX.Element;
  isLoading: boolean;
}

export default function Loading(props: Props) {
  const { isLoading, children } = props;

  if (isLoading) {
    return (
      <Container>
        <ActivityIndicator color="black" size={30} style={{ flex: 1 }} />
      </Container>
    );
  }

  return children;
}

Loading.defaultProps = {
  isLoading: false,
  children: null
};

const Container = styled.View`
  padding: 10px;
  flex: 1;
`;
