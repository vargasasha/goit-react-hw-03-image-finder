import { Component } from 'react';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImages } from './api/fetch';

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
    images: [],
    page: 1,
  };

  changeQuery = newQuery => {
    this.setState({
      // query: `${Date.now()}/${newQuery}`,
      query: newQuery,
      images: [],
      page: 1,
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      const images = await fetchImages(this.state.query, this.state.page);

      // console.log(images.hits);

      this.setState({ images: images.hits });
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    return (
      <>
        <Searchbar changeQuery={this.changeQuery} />
        <ImageGallery images={this.state.images} />
        <Button loadMore={this.handleLoadMore} />
      </>
    );
  }
}
