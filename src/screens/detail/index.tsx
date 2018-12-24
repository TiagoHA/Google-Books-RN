import React, { Component } from "react";
import { Text, TouchableOpacity, ScrollView } from "react-native";
import styled from "styled-components/native";
import Divider from "src/commons/components/atoms/divider";
import ImageBook from "../list/components/ImageBook";
import Stars from "./components/stars";
import Button from "./components/button";
import FavoriteIcon from "./components/favoriteIcon";
import DescriptionBook from "./components/description";

interface DetailScreenProps {
  title: string;
  subtitle: string;
  pages: string;
  value: string;
  rating: number;
}

export default class DetailScreen extends Component<DetailScreenProps> {
  static defaultProps = {
    title: "Logo Design Love: A Guide to Creating Iconic Brand Identities",
    subtitle: "by David Airey",
    pages: "2016 Pages",
    value: "$9.99",
    rating: 2
  };
  render() {
    const { title, subtitle, pages, value, rating } = this.props;
    return (
      <Container>
        <BookHeaderContainer>
          <Left>
            <ImageBook />
            <Pages>{pages}</Pages>
          </Left>

          <Right>
            <Up>
              <Title>{title}</Title>
              <Divider />

              <SubTitle>{subtitle}</SubTitle>
              <Divider />

              <Row>
                <Title>{value}</Title>
                <Divider />
                <Stars rating={rating} />
              </Row>
            </Up>

            <Down>
              <Button title="BUY" />
              <FavoriteIcon />
            </Down>
          </Right>
        </BookHeaderContainer>
        <DescriptionBook />
      </Container>
    );
  }
}

const Up = styled.View`
  flex-direction: column;
  flex: 1;
`;

const Down = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  justify-content: flex-end;
  align-content: flex-end;
`;

const Left = styled.View`
  flex-direction: column;
  padding: 20px 5px;
`;

const Right = styled.View`
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  padding: 10px;
  flex: 1;
`;

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: yellow;
  flex-direction: column;
`;

const BookHeaderContainer = styled.View`
  flex-direction: row;
  margin: 5px;
`;

const Title = styled.Text`
  font-weight: 600;
  font-family: Roboto-Bold;
  font-size: 20px;
`;

const SubTitle = styled.Text`
  font-family: Roboto-Regular;
  font-size: 14px;
  color: gray;
`;

const Pages = styled.Text`
  font-family: Roboto-Regular;
  font-size: 14px;
  color: gray;
  font-weight: 400;
  align-self: center;
`;

const Column = styled.View`
  flex-direction: column;
`;

const Row = styled.View`
  flex-direction: row;
`;
