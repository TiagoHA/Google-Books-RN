import React from 'react'
import { Image } from 'react-native'
import { Container } from './styles'
import { styles } from 'src/screens/books_list/components/ImageBook/styles'
import { imageBookDefault } from './utils'

interface Props {
  image: string
}

export default function ImageBook(props: Props) {
  const { image } = props

  return (
    <Container>
      <Image
        source={{
          uri: image || imageBookDefault,
        }}
        style={styles.image}
      />
    </Container>
  )
}

ImageBook.defaultProps = {
  title: '',
  image: '',
  onPress: null,
}
