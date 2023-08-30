import axios from 'axios';
// import Notiflix from 'notiflix';

axios.defaults.headers.common['x-api-key'] =
  'live_uDbSslA6LeI3y7iXTQiev0SGtT4FNOpDRiWdb5Ee5Q5TidAzDBnrm6TVRjy3mtrC';

function fetchBreeds() {
  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(res => {
      // if (!res.ok) {
      //   throw new Error(res.statusText);
      // }
      return res.data;
    })
    .catch(err => {
      // elements.loader.classList.toggle('change-status');
      // elements.error.classList.toggle('change-status');
      console.log('1', err.response);
    });
}

function fetchCatByBreed(breedId) {
  return axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(res => {
      return res.data;
    })
    .catch(err => console.log('1', err.response));
}
export { fetchBreeds, fetchCatByBreed };
