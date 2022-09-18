import { Component } from 'react';
import './styles.css';

export default class Form extends Component {
  state = {
    keyword: '',
    searchString: '',
  };

  onType = e => {
    this.setState({ keyword: e.currentTarget.value });
  };

  onSearch = e => {
    e.preventDefault();
    this.props.onSearch(this.state.keyword);
    // console.log(this.state.keyword, this.state.searchString);
  };

  render() {
    return (
      <div>
        <div className="Searchbar">
          <form onSubmit={this.onSearch} className="SearchForm">
            <button type="submit" className="SearchForm-button">
              Find
            </button>
            <input
              type="text"
              value={this.state.keyword}
              onChange={this.onType}
              className="SearchForm-input"
            />
          </form>
        </div>
      </div>
    );
  }
}
