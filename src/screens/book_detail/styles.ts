import styled from 'styled-components/native'
import { SafeAreaView } from 'react-navigation'
import { colors } from 'src/styles'

export const Up = styled.View`
  flex-direction: column;
  flex: 1;
  justify-content: space-around;
`

export const Down = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 5px 0;
  justify-content: flex-end;
  align-content: flex-end;
`

export const Left = styled.View`
  flex-direction: column;
  padding: 20px 5px;
`

export const Right = styled.View`
  flex-direction: column;
  padding: 10px;
  flex: 1;
`

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${colors.primary};
  flex-direction: column;
`

export const BookDetail = styled.View`
  flex-direction: row;
  margin: 5px;
`

export const Title = styled.Text.attrs(({ length }) => ({
  fontSize: length > 60 ? 16 : 20,
}))`
  font-weight: 600;
  font-family: Roboto-Bold;
  font-size: ${props => props.fontSize}px;
`

export const Authors = styled.Text`
  font-family: Roboto-Regular;
  font-size: 14px;
  color: #9F8B0C;
`

export const Pages = styled.Text`
  font-family: Roboto-Regular;
  font-size: 14px;
  color: #4F565D;
  font-weight: 400;
  align-self: center;
`

export const Row = styled.View`
  flex-direction: row;
`

export const Column = styled.View`
  flex-direction: column;
`
