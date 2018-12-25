import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import styled from "styled-components/native";

interface Props {
  description: string;
}

export default function DescriptionBook(props: Props) {
  const { description } = props;
  return (
    <Container>
      <ScrollView contentContainerStyle={styles.container}>
        <Description>{description}</Description>
      </ScrollView>
    </Container>
  );
}

DescriptionBook.defaultProps = {
  description: "No description"
};

const Container = styled.View`
  flex-direction: row;
  flex: 1;
`;

const Description = styled.Text`
  line-height: 25;
  flex: 1;
  min-height: 600px;
`;

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: "white",
    padding: 10,
    flexDirection: "column",
    paddingBottom: 30
  }
});
