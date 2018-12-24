import React, { Component } from "react";
import {
  Text,
  View,
  TextInputProps,
  TextProps,
  TouchableOpacityProps,
  ViewProps,
  Image,
  Dimensions,
  ScrollView
} from "react-native";
import styled from "styled-components/native";
import Divider from "src/commons/components/atoms/divider";
import ImageBook from "./components/ImageBook";
const { width, height } = Dimensions.get("window");

const widthImg = width / 3;
const heightImg = height / 3.5;

export default class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <ScrollView
          contentContainerStyle={{ flexWrap: "wrap", flexDirection: "row" }}
        >
          <ImageBook />
          <ImageBook />
          <ImageBook />
          <ImageBook />
          <ImageBook />
          <ImageBook />
          <ImageBook />
          <ImageBook />
          <ImageBook />
          <ImageBook />
          <ImageBook />
          <ImageBook />
        </ScrollView>
      </Container>
    );
  }
}

const Container = styled.SafeAreaView<ViewProps>`
  flex: 1;
  background-color: yellow;
  padding: 10px;
  flex-direction: row;
  flex-wrap: wrap;
`;
