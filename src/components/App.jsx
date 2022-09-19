import { Component } from 'react';
import Form from './Searchbar';
import Search from './ImageGallery';
import './styles.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class App extends Component {
  state = {
    searchString: '',
  };

  handleSubmit = submitText => {
    this.setState({ searchString: submitText });
  };

  render() {
    return (
      <div>
        <Form onSearch={this.handleSubmit} />
        <Search onSearch={this.state.searchString} />
        <ToastContainer />
      </div>
    );
  }
}
