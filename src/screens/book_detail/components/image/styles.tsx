import styled from 'styled-components/native'
import { Dimensions, StyleSheet } from 'react-native'
const { width, height } = Dimensions.get('window')

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

export const Container = styled.View`
  margin: 2px;
  padding: 5px;
  height: ${dimensionsContainer.height}px;
  width: ${dimensionsContainer.width}px;
`
