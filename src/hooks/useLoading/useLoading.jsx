const { default: FetchPictures } = require('components/FetchPictures/FetchPictures');
const { default: ToastWarn } = require('components/ToastWarn/ToastWarn');

const useLoading = (isLoaded, queryString, page, setIsLoading, setPictures, setTotalPages) => {
  if (!isLoaded.current) {
    isLoaded.current = true;
    return;
  }

  if (!queryString) {
    return;
  }
  setIsLoading(true);
  FetchPictures(queryString, page)
    .then(picData => {
      setPictures(prevPictures => [...prevPictures, ...picData.hits]);
      setTotalPages(Math.ceil(picData.totalHits / 12));
      if (picData.hits.length === 0) {
        ToastWarn('Nothing was found');
      }
    })
    .finally(() => setIsLoading(false));
};

export default useLoading;
