import React from 'react';
// import * as basicLightbox from 'basiclightbox';
import { GalleryItem, GalleryItemImg } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ el}) => {
  return (
    <GalleryItem>
      <GalleryItemImg src={el.webformatURL} alt={el.tags} />
    </GalleryItem>
  );
};

export default ImageGalleryItem;
