import React from 'react';
import * as basicLightbox from 'basiclightbox';
import { GalleryItem, GalleryItemImg } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ urlS, urlL, alt }) => {
  return (
    <GalleryItem>
      <GalleryItemImg src={urlS} alt={alt} />
    </GalleryItem>
  );
};

export default ImageGalleryItem;
