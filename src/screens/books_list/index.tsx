import * as React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import styled from "styled-components/native";
import ImageBook from "./components/ImageBook";
import api from "src/services/api";

interface Props {
  navigation?: any;
}

interface State {}

export default class HomeScreen extends React.Component<Props, State> {
  async componentDidMount() {
    const search = this.props.navigation.getParam("search", "NO-ID");
    const url = `volumes?q=\$\{${search.replace(" ", "%20")}\}`;
    const response = await api.get(url);
    console.tron.log(response);
  }
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
