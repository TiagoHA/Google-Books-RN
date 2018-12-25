import styled from "styled-components/native";
import { colors, metrics } from "src/styles";

export const BackgroundImage = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.3;
`;

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.primary};
  align-items: center;
`;

export const Content = styled.View`
  padding: 10px;
  justify-content: center;
  align-items: center;
  flex: 1;
  top: -100px;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text.attrs(({ title }) => ({
  title: title < 40 ? 25 : 18
}))`
  padding: 10px;
  font-weight: 700;
  font-family: Roboto-Bold;
  font-size: ${props => props.title}px;
  margin-bottom: ${metrics.baseMargin}px;
`;

export const SubTitle = styled.Text`
  font-weight: 600;
  font-family: Roboto-Medium;
  font-size: 18px;
  margin-bottom: ${metrics.baseMargin}px;
`;

export const Input = styled.TextInput.attrs({
  autoFocus: false,
  placeholder: "search books",
  autoCapitalize: "none",
  autoCorrect: false,
  underlineColorAndroid: "transparent"
})`
  padding: 50px 5px;
  max-width: 250px;
  background-color: white;
  border-radius: 5px;
  font-weight: 400;
  font-size: 16px;
  padding: 5px 10px;
  margin-bottom: ${metrics.baseMargin}px;
  flex: 1;
`;

export const Button = styled.TouchableOpacity`
  max-width: 250px;
  background-color: ${colors.button};
  border-radius: 5px;
  justify-content: center;
  flex-direction: row;
  padding: 10px 30px;
  margin-bottom: ${metrics.baseMargin}px;
  flex: 1;
`;

export const TextButton = styled.Text`
  color: white;
  font-weight: 500;
  font-family: Roboto-Regular;
  font-size: 16px;
`;
