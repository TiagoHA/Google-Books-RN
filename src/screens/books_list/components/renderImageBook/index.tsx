import ImageBook from '../ImageBook'
import { Item } from 'src/model/list_books_model'

const img =
  'https://smartmobilestudio.com/wp-content/uploads/2012/06/leather-book-preview-300x252.png'

export const renderImageBook = (navigateToDetail: Function) => ({
  item,
}: {
  item: Item
}) => {
  const {
    id,
    volumeInfo: {
      title = '',
      imageLinks: { thumbnail } = {
        thumbnail: img,
      },
    },
  } = item

  return (
    <ImageBook
      key={String(id)}
      title={title}
      image={thumbnail}
      onPress={() => navigateToDetail(item)}
    />
  )
}
