import * as React from "react";
import Divider from "src/components/divider";
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
import ImageBook from "./components/image";
import { Linking } from "react-native";

interface Props {
  title: string;
  authors: string;
  pages: string;
  price: string;
  rating: number;
  image: string;
  description: string;
  buyLink: string;
}

class DetailScreen extends React.Component<Props> {
  static navigationOptions = {
    title: "Book Detail"
  };
  static defaultProps = {
    title: "No title",
    authors: "",
    pages: "0 Page",
    price: "$0.00",
    rating: 0,
    image: "",
    buyLink: null
  };

  handleClick = () => {
    const { buyLink } = this.props;
    if (!buyLink) return () => {};

    Linking.openURL(buyLink);
  };

  render() {
    const {
      title,
      authors,
      pages,
      price,
      rating,
      description,
      image
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

              <Divider size={10} />
              <Row>
                <Title>{price}</Title>
                <Divider />
                {rating > 0 && <Stars rating={rating} />}
              </Row>
            </Up>

            <Down>
              <Button title="BUY" onPress={this.handleClick} />
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
        title = "",
        authors,
        averageRating,
        description,
        imageLinks: { thumbnail } = { thumbnail: false }
      },
      saleInfo: { listPrice: { amount } = { amount: false }, buyLink = null }
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
  price: amount ? `$ ${amount}` : "",
  buyLink: buyLink
});

export default connect(mapStateToProps)(DetailScreen);
