import PropTypes from 'prop-types';
import { useState } from 'react';
import './styles.css';

export default function Form({ onQuery }) {
  const [keyword, setKeyword] = useState('');

  const onType = e => {
    setKeyword(e.currentTarget.value);
  };

  const HandleSearch = e => {
    e.preventDefault();
    if (keyword.trim() === '') {
      return;
    }
    onQuery(keyword.trim());
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
            onChange={onType}
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
  onSearch: PropTypes.func.isRequired,
};
