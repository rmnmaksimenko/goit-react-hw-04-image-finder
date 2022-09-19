import PropTypes from 'prop-types';
import './styles.css';

export function ImageGalleryItem(pic) {
  return (
    <li>
      {
        <img
          className="ImageGalleryItem-image"
          src={pic.webformatURL}
          width="300"
          alt=""
          large={pic.largeImageURL}
          onClick={pic.toggleModal}
        />
      }
    </li>
  );
}

ImageGalleryItem.propTypes = {
  pic: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      toggleModal: PropTypes.func.isRequired,
    })
  ),
};
