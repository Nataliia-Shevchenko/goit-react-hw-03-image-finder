import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';

class App extends Component {
  state = {
    searchText: '',
  };

  onSubmit = searchText => {
    this.setState({ searchText });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery searchText={this.state.searchText} />
        <ToastContainer autoClose={2000} />
      </>
    );
  }
}

export default App;
