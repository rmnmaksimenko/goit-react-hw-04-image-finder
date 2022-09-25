import Form from './Searchbar';
import './styles.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useRef, useState } from 'react';
import { LoadMore } from './Button';
import { Modal } from './modal/modal';
import FetchPictures from './FetchPictures/FetchPictures';
import ImageGallery from './ImageGallery';
import ToastWarn from './ToastWarn/ToastWarn';

export default function App() {
  const [queryString, setQueryString] = useState('');

  const [page, setPage] = useState(1);
  const [pictures, setPictures] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [largeURL, setLargeURL] = useState('');
  const isLoaded = useRef(false);

  const handleSubmit = submitText => {
    if (submitText === queryString) {
      return;
    }
    setQueryString(submitText);
    setPage(1);
    setPictures([]);
  };

  const toggleModal = e => {
    if (e) {
      setLargeURL(e.currentTarget.attributes.large.textContent);
    }
    setShowModal(!showModal);
  };

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    if (!isLoaded.current) {
      isLoaded.current = true;
      return;
    }

    if (!queryString) {
      return;
    }
    FetchPictures(queryString, page).then(picData => {
      setPictures(prevPictures => [...prevPictures, ...picData.hits]);
      setTotalPages(Math.ceil(picData.totalHits / 12));
      if (picData.hits.length === 0) {
        ToastWarn('Nothing was found');
      }
    });
  }, [queryString, page]);

  let endOfSearch = false;
  if (page === totalPages && pictures.length > 0) {
    endOfSearch = true;
  }

  return (
    <div>
      <Form onQuery={handleSubmit} />
      <div>
        {pictures && (
          <ImageGallery pictures={pictures} toggleModal={toggleModal} />
        )}
        {page < totalPages && <LoadMore onLoadMore={onLoadMore} />}
        {endOfSearch === true && (
          <h2 className="EndOfSearch" т>
            End of Search
          </h2>
        )}
        {showModal && (
          <Modal onCloseModal={toggleModal}>
            {<img src={largeURL} alt="" />}
          </Modal>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}
