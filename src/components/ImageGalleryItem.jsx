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
          alt={pic.tags}
          large={pic.largeImageURL}
          onClick={function () {
            pic.toggleModal();
            pic.setLargeURL(pic.largeImageURL);
            pic.setAlt(pic.tags);
          }}
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
