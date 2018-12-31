import * as React from "react";
import { Text, FlatList, View, TextInput } from "react-native";
import { createFilter } from "react-native-search-filter";
import ImageBook from "./components/ImageBook";
import { connect } from "react-redux";
import Loading from "src/commons/components/atoms/loading";
import { Creators as BooksDetailCreators } from "src/store/ducks/book_detail";
import { Creators as BooksListCreators } from "src/store/ducks/books_list";
import { bindActionCreators } from "redux";
import { colors } from "src/styles";
import { Container, Content } from "./styles";
import SearchBar from "./components/searchBar";

const KEYS_TO_FILTER = ["volumeInfo.title", "volumeInfo.authors"];

interface Props {
  navigation: any;
  isLoading: boolean;
  isLoadingMore: boolean;
  booksList: [];
  search: String;
  getBooks: Function;
  saveDetail: Function;
  getMoreBooks: Function;
}

interface State {}

class BooksList extends React.Component<Props, State> {
  static navigationOptions = {
    title: "Books List",
    headerTintColor: "black",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  state = {
    onRefresh: false,
    contentSearch: "",
    showSearch: false
  };

  navigateToDetail = (book: Object) => {
    this.props.saveDetail(book);
    this.props.navigation.push("Detail");
  };

  loadMore = () => {
    this.props.getMoreBooks();
  };

  onRefresh = () => {
    this.props.getBooks(this.props.search);
  };

  handleShowSearch = () =>
    this.setState({ showSearch: !this.state.showSearch });

  handleContentSearch = contentSearch => {
    this.setState({ contentSearch });
  };

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
    const { isLoading, booksList, isLoadingMore } = this.props;
    const filteredBooks = booksList.filter(
      createFilter(this.state.contentSearch, KEYS_TO_FILTER)
    );

    return (
      <Container>
        <Loading isLoading={isLoading}>
          <Content>
            {!booksList ? (
              <Text>No books!</Text>
            ) : (
              <>
                <SearchBar onChangeText={this.handleContentSearch} />

                <FlatList
                  horizontal={false}
                  numColumns={3}
                  data={filteredBooks}
                  extraData={booksList}
                  onEndReached={this.loadMore}
                  keyExtractor={item => String(item.id)}
                  renderItem={this.renderImageBook}
                  onRefresh={this.onRefresh}
                  refreshing={isLoading}
                />
              </>
            )}
            <Loading isLoading={isLoadingMore} />
          </Content>
        </Loading>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { ...BooksDetailCreators, ...BooksListCreators },
    dispatch
  );

const mapStateToProps = state => ({
  booksList: state.booksList.data,
  isLoading: state.booksList.loading,
  isLoadingMore: state.booksList.loadingMore,
  search: state.booksList.search
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksList);
