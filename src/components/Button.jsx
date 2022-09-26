import PropTypes from 'prop-types';
import './styles.css';

export function LoadMore({ onLoadMore, ButtonText }) {
  return (
    <div className="Button-flex">
      <button className="Button" type="button" onClick={onLoadMore}>
        {ButtonText}
      </button>
    </div>
  );
}

LoadMore.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
