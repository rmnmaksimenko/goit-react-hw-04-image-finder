import PropTypes from 'prop-types';
import './styles.css';

export function LoadMore({ onLoadMore }) {
  return (
    <div className="Button-flex">
      <button className="Button" type="button" onClick={onLoadMore}>
        Load More
      </button>
    </div>
  );
}

LoadMore.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
