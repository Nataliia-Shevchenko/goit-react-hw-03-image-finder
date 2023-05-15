import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchText !== this.props.searchText) {
      try {
        this.setState({ loading: true });
        const { hits } = await fetchPictures(
          this.props.searchText,
          this.state.page
        );
        return this.setState({ images: hits });
      } catch (error) {
        this.setState({ error: error.message });
        console.log(error);
      } finally {
        this.setState({ loading: false });
      }
    }

    if (prevState.page !== this.state.page) {
      try {
        this.setState({ loading: true });
        const { hits } = await fetchPictures(
          this.props.searchText,
          this.state.page
        );
        return this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          error: '',
        }));
      } catch (error) {
        this.setState({ error: error.message });
        console.log(error);
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  handleLoadMoreClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

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
        {images?.length >= 12 && <Button onClick={this.handleLoadMoreClick} />}
      </>
    );
  }
}

export default ImageGallery;

ImageGallery.propTypes = {
  searchText: PropTypes.string.isRequired,
};
