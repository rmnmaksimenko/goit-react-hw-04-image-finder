import PropTypes from 'prop-types';
import './styles.css';
import { ImageGalleryItem } from './ImageGalleryItem';

export default function ImageGallery({ pictures, toggleModal }) {
  return (
    <ul className="ImageGallery">
      {pictures.map(pic => {
        return (
          <ImageGalleryItem
            key={pic.id}
            webformatURL={pic.webformatURL}
            largeImageURL={pic.largeImageURL}
            toggleModal={toggleModal}
          />
        );
      })}
    </ul>
  );
}

ImageGallery.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
  toggleModal: PropTypes.func.isRequired,
};
