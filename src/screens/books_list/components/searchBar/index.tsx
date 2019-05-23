import React from 'react'
import { Container, Input } from 'src/screens/home/styles'

interface Props {
  onChangeText: Function
}

export default function SearchBar(props: Props) {
  const { onChangeText } = props
  return (
    <Container>
      <Input
        placeholder="Search"
        onChangeText={onChangeText}
        clearButtonMode="always"
      />
    </Container>
  )
}
