import React, { Component } from 'react';
import axios from 'axios';
import Pagination from './Pagination';

class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    perPage: 7, // Number of images to display per page
  };

  componentDidMount() {
    this.fetchImages();
  }

  fetchImages = () => {
    const { page, perPage } = this.state;
    const apiUrl = `https://picsum.photos/v2/list?page=${page}&limit=${perPage}`;

    axios.get(apiUrl)
      .then((response) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...response.data],
          page: prevState.page + 1,
        }));
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
      });
  };
  loadMoreImages = () => {
    this.fetchImages();
  };


  render() {
    const { images } = this.state;

    return (
      <div className="image-gallery">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.download_url}
            alt={`Image ${image.id}`}
          />
        ))}
         <Pagination loadMore={this.loadMoreImages} />
      </div>
    );
  }
}

export default ImageGallery;