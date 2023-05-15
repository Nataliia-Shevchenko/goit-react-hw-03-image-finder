import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchPictures } from '../../services/pixabay-api';
import ImageGalleryItem from 'components/ImageGalleryItem';
import Loader from 'components/Loader';
import { Gallery } from './ImageGallery.styled';
import Button from 'components/Button';


class ImageGallery extends Component {
  state = {
    images: null,
    loading: false,
    error: '',
    page: 1,
  };

  async componentDidUpdate(prevProps) {
    if (prevProps.searchText !== this.props.searchText) {
      try {
        this.setState({ loading: true });
        const { hits } = await fetchPictures(
          this.props.searchText,
          this.state.page
        );
        return this.setState({ images: hits });
        // if (status === 'ok') {
        //   return this.setState({ images: hits });
        // }
        // throw new Error();
      } catch (error) {
        this.setState({ error: error.message });
        console.log(error);
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  handleLoadMoreClick(e) {
    this.setState({ page: Number(this.state.page) + 1 });
    console.log(this.state.page);
  }

  
  render() {
    const { images, loading, error } = this.state;
    return (
      <>
        {error && toast.error(error)}
        {loading && <Loader />}
        {images?.length === 0 &&
          toast.error(
            'Sorry, there are no images matching your search query. Please try again.'
          )}
        {images?.length > 0 && (
          <Gallery>
            {this.state.images.map(el => (
              <ImageGalleryItem key={el.id} el={el} />
            ))}
          </Gallery>
        )}
        {images?.length > 0 &&  <Button onClick={this.handleLoadMoreClick} />}
        
      </>
    );
  }
}

export default ImageGallery;
