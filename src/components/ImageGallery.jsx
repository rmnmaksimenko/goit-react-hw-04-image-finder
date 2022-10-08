import PropTypes from 'prop-types';
import './styles.css';
import { ImageGalleryItem } from './ImageGalleryItem';

export default function ImageGallery({ pictures, toggleModal, setLargeURL, setAlt }) {
  return (
    <ul className="ImageGallery">
      {pictures.map(pic => {
        return (
          <ImageGalleryItem
            key={pic.id}
            webformatURL={pic.webformatURL}
            largeImageURL={pic.largeImageURL}
            tags={pic.tags}
            toggleModal={toggleModal}
            setLargeURL={setLargeURL}
            setAlt={setAlt}
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
