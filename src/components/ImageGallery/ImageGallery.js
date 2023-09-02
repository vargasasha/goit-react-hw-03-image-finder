import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {

  return (
    <ul>
      {images.map(image => (
        <li key={image.id}>
          <ImageGalleryItem url={image.webformatURL} />
        </li>
      ))}
    </ul>
  );
};
