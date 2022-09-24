import axios from 'axios';
const API_KEY = '27863078-b4a956cfdf1b52b765bed6289';

const FetchPictures = async (searchString, page) => {
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchString}&image_type=photo&page=${page}&per_page=12`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default FetchPictures;
