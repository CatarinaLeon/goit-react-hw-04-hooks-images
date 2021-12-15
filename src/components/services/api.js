const BASE_URL = "https://pixabay.com/api/";
const KEY = "24464531-810b90441dc32988cf7404dfc";
const PER_PAGE = 12;

// function fetchImages(searchQuery, page) {
//   return fetch(
//     `${BASE_URL}?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`
//   ).then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//     return Promise.reject(new Error(`No results found for ${searchQuery}`));
//   });
// }

const fetchImages = async (searchQuery, page) => {
  const res = await fetch(
    `${BASE_URL}?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`
  );
  return res.ok ? res.json() : Promise.reject(new Error(res.statusText));
};

const api = { fetchImages };

export default api;
