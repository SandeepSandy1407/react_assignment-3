const ImageListItems = props => {
  const {eachImage, selectedImage} = props
  const {id, thumbnailUrl} = eachImage

  const imageSelected = () => {
    selectedImage(id)
  }

  return (
    <li>
      <button type="button" onClick={imageSelected}>
        <img src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}
export default ImageListItems
