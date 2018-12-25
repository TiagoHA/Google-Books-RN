import React from "react";
import { Image, Dimensions, StyleSheet } from "react-native";
import styled from "styled-components/native";
const { width, height } = Dimensions.get("window");

interface Props {
  image?: string;
  title?: string;
  onPress?: Function;
}

export default function ImageBook(props: Props) {
  const { image, title, onPress } = props;
  const newTitle = cutText(title);

  return (
    <Container onPress={onPress}>
      <Image
        source={{
          uri: image || imageBookDefault
        }}
        style={styles.image}
      />
      {!!title && (
        <TitleContainer>
          <BookTitle>{newTitle}</BookTitle>
        </TitleContainer>
      )}
    </Container>
  );
}

ImageBook.defaultProps = {
  title: "",
  image: ""
};

const imageBookDefault =
  "https://www.google.com.br/url?sa=i&source=images&cd=&ved=2ahUKEwjqopHTx7vfAhVHj5AKHV6SCvYQjRx6BAgBEAU&url=https%3A%2F%2Fsmartmobilestudio.com%2Fdocumentation%2Fget-the-book%2F&psig=AOvVaw3IcJOpE9PasMTpprCjmIGR&ust=154584717244054";
export function cutText(text: String = "", maxLetters: number = 40) {
  if (text.length <= 0) {
    return "";
  } else if (text.length >= maxLetters) {
    return `${text.substring(0, maxLetters)}...`;
  }
  return text;
}

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

const Container = styled.TouchableOpacity`
  margin: 2px;
  padding: 5px;
  height: ${dimensionsContainer.height}px;
  width: ${dimensionsContainer.width}px;
`;

const TitleContainer = styled.View`
  width: ${dimensions.width}px;
  background-color: rgba(52, 52, 52, 0.7);
  z-index: 1;
  position: absolute;
  bottom: 7px;
  align-self: center;
  padding: 5px 3px;
`;

const BookTitle = styled.Text`
  text-align: center;
  color: white;
  font-size: 12px;
  flex: 1;
  max-height: ${dimensions.height};
`;
