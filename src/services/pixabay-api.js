const BASE_URL = `https://pixabay.com/api/`;
const KEY = '34807686-506fe36a9d31ea04123a9732d';

function fetchPictures(search) {
  return fetch(
    `${BASE_URL}?q=${search}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(responce => {
    if (!responce.ok) {
      throw new Error(responce.status);
    }
    return responce.json();
  });
}

export default fetchPictures;
