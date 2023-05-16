import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';


class ImageGallery extends Component {

  

  render() {
    const { images } = this.props;
    return (
        <Gallery>
          {images.map(el => (
            <ImageGalleryItem key={el.id} el={el} />
          ))}
        </Gallery>
    );
  }
}

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};
