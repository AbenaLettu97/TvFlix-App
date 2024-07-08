'use strict';

const api_key = '9d9a11fb3609aec63d515bd4da768eba';
const imageBaseURL = 'https://image.tmdb.org/t/p/';
const movieBaseURL = 'https://api.themoviedb.org/3/';

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDlhMTFmYjM2MDlhZWM2M2Q1MTViZDRkYTc2OGViYSIsIm5iZiI6MTcyMDI4MTg1NS40MDE2MTYsInN1YiI6IjY2ODcwNDY2ZGFiMTlmOTQyNDU4YjExYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mJJmcj28pJUUn0oZTFv5ncTgsKYp5NQdCFoN9pufetE'
    }
  };
  
/**
 * fetch data from a server using the 'url' and passs
 * the result in JSON data to a 'callback' function,
 * along with an optional parameter if has 'optionalParam'.
 */
const fetchDataFromServer = function(url, callback, optionalParam = options) {
    url = movieBaseURL + url
    fetch(url).then(response => response.json())
    .then(data => callback(data, optionalParam))
    .catch(err => console.error(err));
}

export { imageBaseURL, api_key, fetchDataFromServer};