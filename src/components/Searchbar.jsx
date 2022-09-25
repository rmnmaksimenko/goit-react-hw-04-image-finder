import PropTypes from 'prop-types';
import { useState } from 'react';
import './styles.css';
import ToastWarn from './ToastWarn/ToastWarn';

export default function Form({ onQuery }) {
  const [keyword, setKeyword] = useState('');

  const handleType = e => {
    setKeyword(e.currentTarget.value);
  };

  const HandleSearch = e => {
    e.preventDefault();
    if (keyword.trim() === '') {
      ToastWarn('Type something first');
      return;
    }
    onQuery(keyword.trim());
    setKeyword('');
  };

  return (
    <div>
      <div className="Searchbar">
        <form onSubmit={HandleSearch} className="SearchForm">
          <button type="submit" className="SearchForm-button">
            Find
          </button>
          <input
            type="text"
            value={keyword}
            onChange={handleType}
            className="SearchForm-input"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </div>
    </div>
  );
}

Form.propTypes = {
  onQuery: PropTypes.func.isRequired,
};
