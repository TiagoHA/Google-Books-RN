import React from 'react'
import { Image } from 'react-native'
import { styles, TitleContainer, BookTitle, Button } from './styles'
import { imageBookDefault, cutText } from './utils'

interface Props {
  image: string
  title?: string
  onPress?: Function
}

export default function ImageBook(props: Props) {
  const { image, title, onPress } = props
  const cutTitle = cutText(title)

  return (
    <Button onPress={onPress}>
      <Image
        source={{
          uri: image || imageBookDefault,
        }}
        style={styles.image}
      />
      {!!title && (
        <TitleContainer>
          <BookTitle>{cutTitle}</BookTitle>
        </TitleContainer>
      )}
    </Button>
  )
}

ImageBook.defaultProps = {
  title: '',
  image: '',
  onPress: () => {},
}
