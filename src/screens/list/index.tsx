import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";
import styled from "styled-components/native";
import ImageBook from "./components/ImageBook";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <ImageBook title="Harry" />
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

const styles = StyleSheet.create({
  scrollView: {
    flexWrap: "wrap",
    flexDirection: "row"
  }
});

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: yellow;
  padding: 10px;
  flex-direction: row;
  flex-wrap: wrap;
`;
