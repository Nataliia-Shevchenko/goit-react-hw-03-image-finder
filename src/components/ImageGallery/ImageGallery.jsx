import React, { Component } from 'react';
import fetchPictures from '../../services/pixabay-api';
import ImageGalleryItem from 'components/ImageGalleryItem';
import Loader from 'components/Loader';
import { Gallery } from './ImageGallery.styled';

class ImageGallery extends Component {
  state = {
    images: [],
    loading: false,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.searchText !== this.props.searchText) {
      // this.setState({ loading: true });
      fetchPictures(this.props.searchText).then(data =>
        this.setState({ images: data.hits })
      );
      // this.setState({ loading: false });
    }
  }

  render() {

    const {images, loading} = this.state;
    return (
      <>
        {/* {loading && <Loader />} */}
        {images.length > 0 && (
          <Gallery>
            {this.state.images.map(el => (
              <ImageGalleryItem
                key={el.id}
                urlS={el.webformatURL}
                urlL={el.largeImageURL}
                alt={el.tags}
              />
            ))}
          </Gallery>
        )}
      </>
    );
  }
}

export default ImageGallery;
