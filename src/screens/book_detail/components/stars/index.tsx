import React from 'react'

import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import styled from 'styled-components/native'

interface Props {
  rating: number
}

export default function Stars(props: Props) {
  const { icon1, icon2, icon3, icon4, icon5 } = rating(props.rating)
  return (
    <Row>
      <StarIcon name={icon1} />
      <StarIcon name={icon2} />
      <StarIcon name={icon3} />
      <StarIcon name={icon4} />
      <StarIcon name={icon5} />
    </Row>
  )
}

function rating(rating: number) {
  return {
    icon1: `star${rating >= 1 ? '' : '-outline'}`,
    icon2: `star${rating >= 2 ? '' : '-outline'}`,
    icon3: `star${rating >= 3 ? '' : '-outline'}`,
    icon4: `star${rating >= 4 ? '' : '-outline'}`,
    icon5: `star${rating >= 5 ? '' : '-outline'}`,
  }
}

const StarIcon = styled(Icon)`
  font-size: 20px;
  color: #4c4309;
`

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`
