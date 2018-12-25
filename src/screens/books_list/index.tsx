import * as React from "react";
import { ScrollView, StyleSheet, Text, FlatList, Alert } from "react-native";
import styled from "styled-components/native";
import ImageBook from "./components/ImageBook";
import { connect } from "react-redux";
import Loading from "src/commons/components/atoms/loading";
import { Creators as BooksDetail } from "src/store/ducks/books_detail";
import { bindActionCreators } from "redux";

interface Props {
  navigation?: any;
  isLoading?: boolean;
  booksList?: [];
  saveDetail: Function;
}

interface State {}

class BooksList extends React.Component<Props, State> {
  static navigationOptions = {
    title: "Books List"
  };

  state = {
    onRefresh: false
  };

  navigateToDetail = (book: Object) => {
    this.props.saveDetail(book);
    this.props.navigation.push("Detail");
  };

  loadMore = () => {};

  renderImageBook = ({ item }) => {
    const {
      id,
      volumeInfo: {
        title,
        imageLinks: { thumbnail } = {
          thumbnail:
            "https://smartmobilestudio.com/wp-content/uploads/2012/06/leather-book-preview-300x252.png"
        }
      }
    } = item;
    return (
      <ImageBook
        key={String(id)}
        title={title}
        image={thumbnail}
        onPress={() => this.navigateToDetail(item)}
      />
    );
  };

  render() {
    const { isLoading, booksList } = this.props;

    return (
      <Container>
        <Loading isLoading={isLoading}>
          <Content>
            <FlatList
              horizontal={false}
              numColumns={3}
              data={booksList}
              onEndReached={this.loadMore}
              keyExtractor={item => String(item.id)}
              renderItem={this.renderImageBook}
            />
          </Content>
        </Loading>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(BooksDetail, dispatch);

const mapStateToProps = state => ({
  booksList: state.booksList.data,
  isLoading: state.booksList.loading
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksList);

const Content = styled.View`
  flex-direction: column;
`;

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: yellow;
  padding: 10px;
  flex-direction: column;
`;
