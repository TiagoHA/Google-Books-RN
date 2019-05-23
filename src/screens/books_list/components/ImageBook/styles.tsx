const { width, height } = Dimensions.get('window')

import { StyleSheet, Dimensions } from 'react-native'

import styled from 'styled-components/native'

export const dimensionsContainer = {
  width: width / 3.4,
  height: height / 3.9,
}
export const dimensions = {
  width: width / 3.4 - 10,
  height: height / 3.9 - 10,
}

export const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
    height: dimensions.height,
    width: dimensions.width,
  },
})

export const Button = styled.TouchableOpacity`
  margin: 2px;
  padding: 5px;
  height: ${dimensionsContainer.height}px;
  width: ${dimensionsContainer.width}px;
`

export const TitleContainer = styled.View`
  width: ${dimensions.width}px;
  background-color: rgba(52, 52, 52, 0.7);
  z-index: 1;
  position: absolute;
  bottom: 7px;
  align-self: center;
  padding: 5px 3px;
`

export const BookTitle = styled.Text`
  text-align: center;
  color: white;
  font-size: 12px;
  flex: 1;
  max-height: ${dimensions.height};
`
