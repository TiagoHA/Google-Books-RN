import * as React from "react";
import styled from "styled-components/native";
import Divider from "src/commons/components/atoms/divider";
import { colors, metrics } from "src/styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as BooksCreators } from "src/store/ducks/books_list";
import {
  Container,
  BackgroundImage,
  Button,
  Content,
  Row,
  Title,
  SubTitle,
  Input,
  TextButton
} from "./styles";
import newLink from "src/assets/background";

interface Props {
  navigation?: any;
  getBooks?: Function;
}
interface State {}

class HomeScreen extends React.Component<Props, State> {
  static navigationOptions = {
    header: null
  };

  state = {
    input: ""
  };

  navigateToList = () => {
    if (!this.state.input.trim().length) return;
    this.props.getBooks(this.state.input);
    this.props.navigation.push("List");
    this.setState({ input: "" });
  };

  handleInput = input => this.setState({ input });

  render() {
    return (
      <Container>
        <BackgroundImage source={{ uri: newLink }} resizeMode="stretch" />
        <Content>
          <Title>Google Books</Title>
          <SubTitle>Which books do you want to search?</SubTitle>

          <Divider size={30} />

          <Row>
            <Input
              onChangeText={this.handleInput}
              value={this.state.input}
              clearButtonMode="always"
            />
          </Row>
          <Row>
            <Button onPress={this.navigateToList}>
              <TextButton>Search</TextButton>
            </Button>
          </Row>
        </Content>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(BooksCreators, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(HomeScreen);
