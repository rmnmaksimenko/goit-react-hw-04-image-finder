import { Component } from 'react';
import Form from './form';
import Search from './search';
import './styles.css';

const API_KEY = '27863078-b4a956cfdf1b52b765bed6289';

export default class App extends Component {
  state = {
    searchString: '',
    status: '',
  };

  handleSubmit = submitText => {
    this.setState({ searchString: submitText });
  };

  render() {
    return (
      <div>
        <Form onSearch={this.handleSubmit} />
        {/* <p>{this.state.searchString}</p> */}
        <Search onSearch={this.state.searchString} />
      </div>
    );
  }
}
