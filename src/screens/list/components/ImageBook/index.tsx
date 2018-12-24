import React from "react";
import { Image, Dimensions, ViewProps, StyleSheet } from "react-native";
import styled from "styled-components/native";
const { width, height } = Dimensions.get("window");

interface ImageBookProps {
  image?: string;
  title?: string;
}

export default function ImageBook(props: ImageBookProps) {
  const { image, title } = props;

  return (
    <Container>
      <Image
        source={{
          uri: image
        }}
        style={styles.image}
      />
      {title && (
        <TitleContainer>
          <BookTitle>{title}</BookTitle>
        </TitleContainer>
      )}
    </Container>
  );
}

ImageBook.defaultProps = {
  image:
    "http://books.google.com/books/content?id=WV8pZj_oNBwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
};

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

const Container = styled.View<ViewProps>`
  margin: 2px;
  padding: 5px;
  height: ${dimensionsContainer.height}px;
  width: ${dimensionsContainer.width}px;
`;

const TitleContainer = styled.View<ViewProps>`
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
