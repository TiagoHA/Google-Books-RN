import React from "react";
import { Image, Dimensions, StyleSheet } from "react-native";
import styled from "styled-components/native";
const { width, height } = Dimensions.get("window");

interface Props {
  image: string;
}

export default function ImageBook(props: Props) {
  const { image } = props;

  return (
    <Container>
      <Image
        source={{
          uri: image || imageBookDefault
        }}
        style={styles.image}
      />
    </Container>
  );
}

ImageBook.defaultProps = {
  title: "",
  image: "",
  onPress: null
};

const imageBookDefault =
  "https://www.google.com.br/url?sa=i&source=images&cd=&ved=2ahUKEwjqopHTx7vfAhVHj5AKHV6SCvYQjRx6BAgBEAU&url=https%3A%2F%2Fsmartmobilestudio.com%2Fdocumentation%2Fget-the-book%2F&psig=AOvVaw3IcJOpE9PasMTpprCjmIGR&ust=154584717244054";

const dimensionsContainer = {
  width: width / 3.4,
  height: height / 3.9
};
const dimensions = {
  width: width / 3.4 - 10,
  height: height / 3.9 - 10
};

const styles = StyleSheet.create({
  image: {
    resizeMode: "contain",
    height: dimensions.height,
    width: dimensions.width
  }
});

const Container = styled.View`
  margin: 2px;
  padding: 5px;
  height: ${dimensionsContainer.height}px;
  width: ${dimensionsContainer.width}px;
`;
