import React, { Component } from "react";
import Icon from "react-native-vector-icons/dist/MaterialCommunityIcons";
import styled from "styled-components/native";

interface Props {
  onPress: Function;
}

interface State {
  active: boolean;
}

export default class FavoriteIcon extends Component<Props, State> {
  static defaultProps = {
    onPress: () => {}
  };
  state = {
    active: false
  };

  onPress = () => {
    this.setState({ active: !this.state.active });
    this.props.onPress();
  };
  render() {
    const { active } = this.state;
    return (
      <Favorite active={active}>
        <FavIcon
          name={active ? "heart-outline" : "heart"}
          onPress={this.onPress}
          active={active}
        />
      </Favorite>
    );
  }
}

const Favorite = styled.TouchableOpacity`
  background-color: ${props => (props.active ? "red" : "yellow")};
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

const FavIcon = styled(Icon)`
  font-size: 23px;
  color: ${props => (props.active ? "white" : "black")};
`;
