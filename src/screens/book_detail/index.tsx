import * as React from "react";
import styled from "styled-components/native";
import Divider from "src/commons/components/atoms/divider";
import ImageBook from "../books_list/components/ImageBook";
import Stars from "./components/stars";
import Button from "./components/button";
import FavoriteIcon from "./components/favoriteIcon";
import DescriptionBook from "./components/description";
import { connect } from "react-redux";
import { Container, Row, Title } from "../home/styles";
import {
  BookDetail,
  Left,
  Pages,
  Right,
  Up,
  Column,
  Authors,
  Down
} from "./styles";

interface Props {
  title: string;
  authors: string;
  pages: string;
  price: string;
  rating: number;
  image: string;
  description: string;
  saleability: string;
}

class DetailScreen extends React.Component<Props> {
  static navigationOptions = {
    title: "Book Detail"
  };
  static defaultProps = {
    title: "Logo Design Love: A Guide to Creating Iconic Brand Identities",
    authors: "by David Airey",
    pages: "2016 Pages",
    price: "$9.99",
    rating: 2,
    image:
      "https://www.google.com.br/url?sa=i&source=images&cd=&ved=2ahUKEwjqopHTx7vfAhVHj5AKHV6SCvYQjRx6BAgBEAU&url=https%3A%2F%2Fsmartmobilestudio.com%2Fdocumentation%2Fget-the-book%2F&psig=AOvVaw3IcJOpE9PasMTpprCjmIGR&ust=154584717244054"
  };

  render() {
    console.tron.log("PROPS DETAIL: ", this.props);
    const {
      title,
      authors,
      pages,
      price,
      rating,
      description,
      image,
      saleability
    } = this.props;
    return (
      <Container>
        <BookDetail>
          <Left>
            <ImageBook image={image} />
            <Pages>{pages}</Pages>
          </Left>

          <Right>
            <Up>
              <Row>
                <Column>
                  <Title length={title.length}>{title}</Title>
                  <Authors>{authors.slice(0, 60)}</Authors>
                </Column>
              </Row>

              <Row>
                <Title>{price}</Title>
                <Divider />
                <Stars rating={rating} />
              </Row>
            </Up>

            <Down>
              <Button title="BUY" />
              <FavoriteIcon />
            </Down>
          </Right>
        </BookDetail>
        <DescriptionBook description={description} />
      </Container>
    );
  }
}

const mapStateToProps = ({
  bookDetail: {
    detail: {
      volumeInfo: {
        pageCount,
        title,
        authors,
        averageRating,
        description,
        imageLinks: { thumbnail } = { thumbnail: false }
      },
      saleInfo: { saleability, listPrice: { amount } = { amount: false } }
    }
  }
}) => ({
  pages: pageCount ? `pages ${pageCount}` : "",
  title: title,
  authors: !authors
    ? ""
    : authors.length < 50
    ? `by ${authors}`
    : `by ${authors.slice(0, 80)}...`,
  rating: averageRating,
  description: description,
  image: thumbnail,
  saleability: saleability,
  price: amount ? `$ ${amount}` : ""
});

export default connect(mapStateToProps)(DetailScreen);
