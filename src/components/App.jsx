import { useEffect, useRef, useState } from 'react';

import './styles.css';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import SearchForm from './Searchbar';
import { LoadMore } from './Button';
import ImageGallery from './ImageGallery';
import { Modal } from './modal/modal';
import Spinner from './Spinner/Spinner';
import useLoading from 'hooks/useLoading/useLoading';

export default function App() {
  const [queryString, setQueryString] = useState('');
  const [page, setPage] = useState(1);
  const [pictures, setPictures] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [largeURL, setLargeURL] = useState('');
  const [alt, setAlt] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const isLoaded = useRef(false);

  const handleSubmit = submitText => {
    if (submitText === queryString) {
      return;
    }
    setQueryString(submitText);
    setPage(1);
    setPictures([]);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const showLoadMoreButton = () => {
    if (page < totalPages) {
      if (isLoading === false) {
        return <LoadMore onLoadMore={onLoadMore} ButtonText={'Load More'} />;
      } else return <Spinner />;
    }
    return;
  };

  const loadingPictures = useLoading;

  useEffect(() => {
    loadingPictures(isLoaded, queryString, page, setIsLoading, setPictures, setTotalPages);
  }, [queryString, page]);

  let endOfSearch = false;
  if (page === totalPages && pictures.length > 0) {
    endOfSearch = true;
  }

  return (
    <div>
      <SearchForm onQuery={handleSubmit} />
      <div>
        {pictures && (
          <ImageGallery
            pictures={pictures}
            toggleModal={toggleModal}
            setLargeURL={setLargeURL}
            setAlt={setAlt}
          />
        )}
        {showLoadMoreButton()}
        {endOfSearch === true && <h2 className="EndOfSearch">End of Search</h2>}
        {showModal && <Modal onCloseModal={toggleModal}>{<img src={largeURL} alt={alt} />}</Modal>}
      </div>
      <ToastContainer />
    </div>
  );
}
