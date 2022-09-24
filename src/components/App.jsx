import Form from './Searchbar';
import './styles.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useRef, useState } from 'react';
import { LoadMore } from './Button';
import { Modal } from './modal/modal';
import FetchPictures from './FetchPictures';
import ImageGallery from './ImageGallery';

export default function App() {
  const [queryString, setQueryString] = useState('');

  const [page, setPage] = useState(1);
  const [pictures, setPictures] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [largeURL, setLargeURL] = useState('');
  const onSearch = queryString;
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

    if (!onSearch) {
      toast.warn('Type something first', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    FetchPictures(onSearch, page).then(picData => {
      console.log(picData);
      console.log(page);
      setPictures(prevPictures => [...prevPictures, ...picData.hits]);
      setTotalPages(Math.ceil(picData.totalHits / 12));
    });
  }, [onSearch, page]);

  // console.log(this.state.pictures);
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
        {endOfSearch === true ? (
          <h2 className="EndOfSearch" т>
            End of Search
          </h2>
        ) : null}
        {showModal && (
          <Modal onCloseModal={toggleModal}>
            {<img src={largeURL} alt="" />}
          </Modal>
        )}
      </div>
      {/* <Search onSearch={searchString} /> */}
      <ToastContainer />
    </div>
  );
}
