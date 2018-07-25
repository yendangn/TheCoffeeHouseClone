import axios from 'axios';

function parseJSON (response) {
  return response.data;
}

function checkStatus (response) {
  if (response && response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error();
  error.message = response.response.data;
  throw error;
}

function fetchWithTimeout (fetchPromise, ms, dispatch) {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => reject(new Error('Time out')), ms);
    fetchPromise
      .then(
        (res) => {
          clearTimeout(timeoutId);
          resolve(res);
        },
        (err) => {
          clearTimeout(timeoutId);
          reject(err);
        }
      );
  });
}

export default function call (url, options, dispatch) {
  return fetchWithTimeout(axios(url, options), 20000, dispatch)
    .then(checkStatus)
    .then(parseJSON);
}
