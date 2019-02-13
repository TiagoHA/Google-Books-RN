import * as React from "react";
import Icon from "react-native-vector-icons/dist/MaterialCommunityIcons";
import styled from "styled-components/native";

interface Props {
  onPress: Function;
}

interface State {
  active: boolean;
}

export default class FavoriteIcon extends React.Component<Props, State> {
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
      <Favorite onPress={this.onPress}>
        <FavIcon name={active ? "heart" : "heart-outline"} active={active} />
      </Favorite>
    );
  }
}

const Favorite = styled.TouchableOpacity`
  background-color: #DC4B5D;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

const FavIcon = styled(Icon)`
  font-size: 23px;
  color: white;
`;
