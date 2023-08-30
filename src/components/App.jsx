import { Component } from 'react';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageItem } from './ImageGalleryItem/ImageGalleryItem';
import { Searchbar } from './Searchbar/Searchbar';

// export const App = () => {
//   return (
//     <>
//       <Searchbar />
//       <ImageGallery />
//       <ImageItem/>
//       <Button />
//     </>
//   );
// };

export class App extends Component {
  state = {
    query: '',
    images: '',
  };

  changeQuery = () => {};

  getImages = () => {};

  render() {
    return (
      <>
        <Searchbar />
        <ImageGallery />
        <ImageItem />
        <Button />
      </>
    );
  }
}
