import * as React from "react";
import { ActivityIndicator } from "react-native";
import { colors } from "src/styles";

interface Props {
  children: JSX.Element;
  isLoading: boolean;
}

export default function Loading(props: Props) {
  const { isLoading, children } = props;

  if (isLoading) {
    return <ActivityIndicator style={{ flex: 1 }} />;
  }

  return children;
}

Loading.defaultProps = {
  isLoading: false,
  children: null
};
