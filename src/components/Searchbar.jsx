import { Field, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import './styles.css';
import ToastWarn from './ToastWarn/ToastWarn';

const initialValues = {
  keyword: '',
};

export default function SearchForm({ onQuery }) {
  const HandleSearch = (values, { resetForm }) => {
    const { keyword } = values;
    if (keyword.trim() === '') {
      ToastWarn('Type something first');
      return;
    }
    onQuery(keyword.trim());
    resetForm();
  };

  return (
    <div className="Searchbar">
      <Formik onSubmit={HandleSearch} initialValues={initialValues}>
        <Form className="SearchForm">
          <button type="submit" className="SearchForm-button">
            Find
          </button>
          <Field
            type="text"
            name="keyword"
            className="SearchForm-input"
            autoFocus
            placeholder="Search images and photos"
            required
          />
        </Form>
      </Formik>
    </div>
  );
}

SearchForm.propTypes = {
  onQuery: PropTypes.func.isRequired,
};
