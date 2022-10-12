import PropTypes from 'prop-types';
import './styles.css';

export function ImageGalleryItem({
  webformatURL,
  tags,
  largeImageURL,
  toggleModal,
  setLargeURL,
  setAlt,
}) {
  return (
    <li>
      {
        <img
          className="ImageGalleryItem-image"
          src={webformatURL}
          width="300"
          alt={tags}
          large={largeImageURL}
          onClick={function () {
            toggleModal();
            setLargeURL(largeImageURL);
            setAlt(tags);
          }}
        />
      }
    </li>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
  setLargeURL: PropTypes.func.isRequired,
  setAlt: PropTypes.func.isRequired,
};
