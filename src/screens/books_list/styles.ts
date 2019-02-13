import styled from 'styled-components/native'
import { SafeAreaView } from 'react-navigation'
import { colors } from 'src/styles'

export const Content = styled.View`
  flex-direction: column;
`

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${colors.primary};
  padding: 10px;
  flex-direction: column;
`
