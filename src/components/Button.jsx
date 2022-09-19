import PropTypes from 'prop-types';
import './styles.css';

export function LoadMore(props) {
  return (
    <div className="Button-flex">
      <button className="Button" type="button" onClick={props.onLoadMore}>
        Load More
      </button>
    </div>
  );
}

LoadMore.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
