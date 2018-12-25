import * as React from "react";
import { ActivityIndicator } from "react-native";
import { colors } from "src/styles";

interface Props {
  children: Function | undefined | null;
  isLoading: boolean;
}

export default function Loading(props: Props) {
  const { isLoading, children } = props;

  if (isLoading) {
    return <ActivityIndicator style={{ backgroundColor: colors.secondary }} />;
  }

  return children;
}
