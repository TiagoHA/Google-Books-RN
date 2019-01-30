import React from "react";
import { View } from "react-native";

interface DividerProps {
  size?: number;
}

export default function Divider(props: DividerProps) {
  return <View style={{ margin: props.size || 5 }} />;
}
